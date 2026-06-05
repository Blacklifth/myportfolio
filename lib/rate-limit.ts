/**
 * Rate limiter en memoria por clave (IP). Ventana fija sencilla, sin
 * dependencias. Mitiga abuso/spam automatizado del formulario (OWASP A04/A07).
 *
 * Nota: el estado vive en el proceso. En Render single-instance es suficiente;
 * si algún día se escala a múltiples instancias habría que mover esto a un
 * store compartido (p. ej. Redis/Upstash).
 */
interface Entry {
    count: number;
    resetAt: number;
}

const buckets = new Map<string, Entry>();

interface RateLimitResult {
    ok: boolean;
    /** Segundos hasta que la ventana se reinicia (para Retry-After). */
    retryAfter: number;
}

export function rateLimit(
    key: string,
    limit = 3,
    windowMs = 10 * 60 * 1000
): RateLimitResult {
    const now = Date.now();
    const entry = buckets.get(key);

    if (!entry || now >= entry.resetAt) {
        buckets.set(key, { count: 1, resetAt: now + windowMs });
        return { ok: true, retryAfter: 0 };
    }

    if (entry.count >= limit) {
        return {
            ok: false,
            retryAfter: Math.ceil((entry.resetAt - now) / 1000),
        };
    }

    entry.count += 1;
    return { ok: true, retryAfter: 0 };
}

// Limpieza periódica de entradas expiradas para que el Map no crezca sin límite.
const CLEANUP_INTERVAL = 15 * 60 * 1000;
if (typeof setInterval === "function") {
    const timer = setInterval(() => {
        const now = Date.now();
        for (const [key, entry] of buckets) {
            if (now >= entry.resetAt) buckets.delete(key);
        }
    }, CLEANUP_INTERVAL);
    // No mantener vivo el proceso solo por este timer.
    timer.unref?.();
}
