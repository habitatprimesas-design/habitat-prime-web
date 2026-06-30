# Publicación de HÁBITAT PRIME en GitHub Pages + Cloudflare

## 1. Subir esta versión a GitHub
1. Descomprime este paquete.
2. Entra al repositorio `habitatprimesas-design/habitat-prime-web`.
3. Sube todos los archivos y carpetas de esta versión.
4. Verifica que en la raíz estén:
   - `index.html`
   - `CNAME`
   - carpeta `assets`

## 2. Activar GitHub Pages
1. En el repositorio, entra a **Settings**.
2. En el menú izquierdo, entra a **Pages**.
3. En **Build and deployment**, selecciona:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
4. Clic en **Save**.

## 3. Dominio personalizado
En **Settings > Pages > Custom domain**, escribe:

www.habitatprime.co

GitHub debería reconocer el archivo `CNAME` incluido.

## 4. DNS en Cloudflare
En Cloudflare > habitatprime.co > DNS, agrega o ajusta:

Tipo: CNAME
Nombre: www
Contenido/Target: habitatprimesas-design.github.io
Proxy: DNS only al inicio. Luego se puede activar proxied.
TTL: Auto

Para el dominio raíz `habitatprime.co`, lo ideal es redireccionar a `www.habitatprime.co` desde Cloudflare con una Redirect Rule.

## 5. Verificación
GitHub puede tardar varios minutos en emitir el certificado HTTPS. Si aparece la opción **Enforce HTTPS**, actívala cuando esté disponible.
