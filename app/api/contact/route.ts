import { NextResponse } from "next/server";
import { contactSchema, HONEYPOT_FIELD } from "@/lib/contact-schema";
import { rateLimit } from "@/lib/rate-limit";
import { sendContactEmail } from "@/lib/mailer";

// Nodemailer necesita el runtime de Node (no Edge).
export const runtime = "nodejs";

function getClientIp(request: Request): string {
    const forwarded = request.headers.get("x-forwarded-for");
    if (forwarded) return forwarded.split(",")[0].trim();
    return request.headers.get("x-real-ip")?.trim() || "unknown";
}

// Tope de tamaño del cuerpo: los campos válidos caben de sobra; cualquier cosa
// mayor se rechaza antes de parsear (mitiga abuso por payloads grandes).
const MAX_BODY_BYTES = 10 * 1024;

export async function POST(request: Request) {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > MAX_BODY_BYTES) {
        return NextResponse.json(
            { ok: false, message: "Solicitud demasiado grande." },
            { status: 413 }
        );
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { ok: false, message: "Solicitud inválida." },
            { status: 400 }
        );
    }

    const data = body as Record<string, unknown>;

    // 1) Honeypot: si el campo oculto viene relleno es un bot. Respondemos un
    // 200 falso para no darle señal de que fue detectado, sin enviar nada.
    if (typeof data[HONEYPOT_FIELD] === "string" && data[HONEYPOT_FIELD].trim()) {
        return NextResponse.json({ ok: true, message: "Mensaje enviado." });
    }

    // 2) Rate limit por IP.
    const { ok, retryAfter } = rateLimit(getClientIp(request));
    if (!ok) {
        return NextResponse.json(
            {
                ok: false,
                message:
                    "Demasiados intentos. Espera unos minutos antes de volver a enviar.",
            },
            { status: 429, headers: { "Retry-After": String(retryAfter) } }
        );
    }

    // 3) Validación server-side (no confiamos en el cliente).
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
        return NextResponse.json(
            {
                ok: false,
                message:
                    parsed.error.issues[0]?.message ?? "Datos inválidos.",
            },
            { status: 400 }
        );
    }

    // 4) Envío (sanitización/escape ocurre dentro del mailer).
    try {
        await sendContactEmail(parsed.data);
        return NextResponse.json({ ok: true, message: "Mensaje enviado." });
    } catch (error) {
        console.error("[contact] Error al enviar el correo:", error);
        return NextResponse.json(
            {
                ok: false,
                message:
                    "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.",
            },
            { status: 500 }
        );
    }
}
