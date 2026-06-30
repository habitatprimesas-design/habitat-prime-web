# Publicación de HÁBITAT PRIME con GitHub + Cloudflare Pages

## 1. Descomprimir el archivo
Descomprime `habitat_prime_web_premium.zip` en tu computador.

La carpeta debe contener:

- index.html
- assets/styles.css
- assets/script.js
- README_GITHUB_CLOUDFLARE.md

## 2. Subir a GitHub
1. Entra a GitHub.
2. Clic en **New repository**.
3. Nombre sugerido: `habitat-prime-web`.
4. Selecciona **Public**.
5. Clic en **Create repository**.
6. En la pantalla siguiente, busca la opción **uploading an existing file**.
7. Arrastra los archivos y la carpeta `assets`.
8. Escribe en el mensaje: `Primera versión web Habitat Prime`.
9. Clic en **Commit changes**.

## 3. Conectar Cloudflare Pages
1. En Cloudflare, entra a **Trabajadores y Pages**.
2. Clic en **Connect GitHub**.
3. Autoriza tu cuenta de GitHub.
4. Selecciona el repositorio `habitat-prime-web`.
5. En configuración del proyecto:
   - Project name: `habitat-prime-web`
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: dejar vacío
   - Build output directory: `/`
6. Clic en **Save and Deploy**.

## 4. Conectar el dominio
1. En Cloudflare Pages, entra al proyecto creado.
2. Ve a **Custom domains** o **Dominios personalizados**.
3. Clic en **Set up a custom domain**.
4. Escribe: `www.habitatprime.co`.
5. Confirma.
6. Repite el proceso con: `habitatprime.co` si Cloudflare lo permite.

## 5. Revisión final
Cuando Cloudflare indique que el dominio está activo, abre:

https://www.habitatprime.co

Si no carga de inmediato, espera entre 5 y 30 minutos.

## Datos configurados
- Dominio: www.habitatprime.co
- Correo: contacto@habitatprime.co
- WhatsApp: 300 429 2902

## Cómo editar inmuebles
Abre el archivo:

assets/script.js

Edita la lista llamada `properties`.
Cada inmueble tiene título, tipo, ubicación, precio, características, imagen y descripción.
