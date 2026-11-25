# Portafolio de Miguel Ayala

Portafolio personal construido con Next.js 16, React 19 y TypeScript. El sitio se genera como archivos estáticos para publicarse en GitHub Pages.

## Desarrollo local

Necesitas Node.js 20.9 o superior.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

## Validar y generar el sitio

```bash
npm run lint
npm run build
```

La versión estática queda en `out/`.

## Publicar en GitHub Pages

El workflow de GitHub Actions en `.github/workflows/deploy.yml` compila y publica automáticamente al hacer push a `main`. En la configuración del repositorio, selecciona **Settings → Pages → Build and deployment → Source: GitHub Actions**.

La ruta base se detecta automáticamente para repositorios de proyecto como `mick2332-q.github.io/myworks`; los sitios de usuario u organización no reciben una ruta base adicional.
