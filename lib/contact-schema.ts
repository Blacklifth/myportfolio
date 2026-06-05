import { z } from "zod";

/**
 * Validación compartida cliente/servidor del formulario de contacto.
 * El cliente la usa para feedback inmediato; el servidor la reaplica porque la
 * validación del navegador nunca es confiable (OWASP A03: Injection).
 */
export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Ingresa tu nombre.")
        .max(80, "El nombre es demasiado largo."),
    email: z
        .string()
        .trim()
        .email("Ingresa un email válido.")
        .max(120, "El email es demasiado largo."),
    subject: z
        .string()
        .trim()
        .min(3, "Ingresa un asunto.")
        .max(120, "El asunto es demasiado largo."),
    message: z
        .string()
        .trim()
        .min(10, "El mensaje es demasiado corto.")
        .max(2000, "El mensaje es demasiado largo."),
});

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * Nombre del campo honeypot: invisible para humanos, tentador para bots.
 * Evita nombres que el autorrelleno reconozca (company/email/phone/etc.), o los
 * gestores de contraseñas lo completan y generan falsos positivos.
 */
export const HONEYPOT_FIELD = "contact_ref";
