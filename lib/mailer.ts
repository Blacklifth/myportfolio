import nodemailer from "nodemailer";
import type { ContactInput } from "./contact-schema";

/** Escapa caracteres HTML para evitar inyección/XSS en el correo (OWASP A03). */
function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/** Elimina CR/LF para impedir inyección de cabeceras SMTP en campos de header. */
function sanitizeHeader(value: string): string {
    return value.replace(/[\r\n]+/g, " ").trim();
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
    if (transporter) return transporter;

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
        throw new Error("Faltan variables de entorno SMTP.");
    }

    const port = Number(SMTP_PORT);
    transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port,
        secure: port === 465, // 465 = TLS implícito; 587 = STARTTLS
        auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    return transporter;
}

/**
 * Envía el mensaje del formulario. From usa el dominio autenticado (SPF/DKIM)
 * y Reply-To apunta al visitante para poder responderle directamente.
 */
export async function sendContactEmail(data: ContactInput): Promise<void> {
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER!;
    const to = process.env.CONTACT_TO || process.env.SMTP_USER!;

    const name = sanitizeHeader(data.name);
    const email = sanitizeHeader(data.email);
    const subject = sanitizeHeader(data.subject);

    await getTransporter().sendMail({
        from,
        to,
        replyTo: `${name} <${email}>`,
        subject: `[Portfolio] ${subject}`,
        text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\n\n${data.message}`,
        html: `
            <h2>Nuevo mensaje desde el portfolio</h2>
            <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
        `,
    });
}
