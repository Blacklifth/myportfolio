# Pendiente: auto-endurecer myportfolio (security headers)

> Estado: **pendiente / deuda conocida**. Registrado el 2026-06-25.

## Contexto

myportfolio corre detras del **edge proxy nginx compartido** del VPS (`c:\Proyectos\proxy`),
que ahora aloja varias apps (companion, y a futuro webs de clientes como dame-jeanne).

El criterio de arquitectura de ese proxy es **edge-fino**:

> El edge es general y solo aporta lo que solo el sabe (TLS + HSTS, IP real, mTLS, rate-limit,
> rechazo de hosts). **Cada app se protege en profundidad por su cuenta** (CSP, X-Frame, etc.).

## El problema

myportfolio es **la unica app que NO cumple ese criterio**. Verificado en
[next.config.ts](../next.config.ts): solo tiene `output: "standalone"`, sin `headers()` ni
middleware. Next.js **no emite** `Content-Security-Policy`, `X-Frame-Options`,
`X-Content-Type-Options`, `Referrer-Policy` ni `Permissions-Policy` por defecto.

Por eso hoy **nginx** se los pone a nivel `server` en `moccadev.cl.conf` (a diferencia de
companion/FastAPI y dame-jeanne/helmet, que se auto-endurecen). Funciona y **no hay duplicacion**
(porque Next no compite), pero deja la seguridad de moccadev.cl **acoplada al edge** — justo lo
contrario al modelo escalable.

## Qué hacer (cuando se retome)

1. **Añadir `headers()` en `next.config.ts`** con la postura de seguridad propia del sitio. Base:

   ```ts
   const securityHeaders = [
     { key: "X-Frame-Options", value: "DENY" },
     { key: "X-Content-Type-Options", value: "nosniff" },
     { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
     { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
     // CSP: ajustar a lo que el sitio realmente carga (fuentes, analytics, etc.)
     { key: "Content-Security-Policy", value: "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; frame-ancestors 'none'; base-uri 'self'; object-src 'none'" },
   ];

   const nextConfig: NextConfig = {
     output: "standalone",
     poweredByHeader: false, // de paso: quita el X-Powered-By
     async headers() {
       return [{ source: "/:path*", headers: securityHeaders }];
     },
   };
   ```
   - HSTS NO va aqui: lo pone el edge (es el terminador TLS).
   - Validar la CSP en navegador (consola) antes de prod: una CSP mal ajustada rompe estilos/scripts.

2. **Pasar `moccadev.cl.conf` al modelo edge-fino** en el repo del proxy:
   - Quitar `include security-headers.conf` y el `add_header X-Frame-Options` del bloque `server`.
   - En `location /`, incluir `snippets/edge-baseline.conf` (solo HSTS), como companion/`/api`.
   - `docker exec edge-proxy nginx -t && ... reload`, y verificar con
     `curl -sI https://moccadev.cl` que cada header aparece **una sola vez** y los pone Next.

## Referencia
- Politica de headers del edge y "como agregar una app": `c:\Proyectos\proxy\README.md`.
- Apps que ya cumplen el modelo: companion (FastAPI) y dame-jeanne (helmet).
