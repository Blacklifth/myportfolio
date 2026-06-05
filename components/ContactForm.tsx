"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import SuccessMsg from "./SuccessMsg";
import { contactSchema, HONEYPOT_FIELD } from "@/lib/contact-schema";

const INITIAL = { name: "", email: "", subject: "", message: "" };

const ContactForm = () => {
    const [formData, setFormData] = useState(INITIAL);
    const [honeypot, setHoneypot] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Bloqueo anti doble-envío: ignora submits mientras hay uno en curso.
        if (isSubmitting) return;
        setError("");

        // Validación en cliente (mismo esquema que el servidor) para feedback rápido.
        const parsed = contactSchema.safeParse(formData);
        if (!parsed.success) {
            setError(parsed.error.issues[0]?.message ?? "Revisa los datos.");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...parsed.data,
                    [HONEYPOT_FIELD]: honeypot,
                }),
            });
            const result = await response.json();

            if (response.ok && result.ok) {
                setSuccess(true);
                setFormData(INITIAL);
            } else {
                setError(
                    result.message ?? "No se pudo enviar el mensaje."
                );
            }
        } catch {
            setError("Error de conexión. Inténtalo de nuevo más tarde.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (success) {
        return <SuccessMsg status="Tu mensaje fue enviado correctamente." />;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div className="flex flex-col md:flex-row gap-4">
                <Input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="disabled:opacity-60"
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="disabled:opacity-60"
                />
            </div>
            <Input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
                className="disabled:opacity-60"
            />
            <Textarea
                name="message"
                placeholder="Tu mensaje"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="disabled:opacity-60"
            />

            {/* Honeypot anti-bots: oculto y fuera del foco. Si se rellena, el
                servidor descarta el envío. No usar display:none (algunos bots lo saltan). */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                }}
            >
                <label htmlFor={HONEYPOT_FIELD}>No completar este campo</label>
                <input
                    id={HONEYPOT_FIELD}
                    name={HONEYPOT_FIELD}
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                />
            </div>

            {error && (
                <p role="alert" className="text-sm text-red-400">
                    {error}
                </p>
            )}

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 glass glass-hover text-white font-semibold rounded-full shadow-lg shadow-accentOrange/20 hover:text-white disabled:opacity-60"
            >
                {isSubmitting ? "Enviando…" : "Enviar mensaje"}
            </Button>
        </form>
    );
};

export default ContactForm;
