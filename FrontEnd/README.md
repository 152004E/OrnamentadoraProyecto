# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

# Frontend - Ornamentadora Proyecto

Este es el frontend de la plataforma **Ornamentadora Proyecto**, una aplicación web diseñada para gestionar proyectos de ornamentación, permitiendo la administración de clientes, archivos, comentarios y visualización del avance de cada proyecto.

## 🛠 Tecnologías utilizadas
- React
- Vite (opcional si decides usarlo)
- React Router
- Axios
- TailwindCSS (opcional)
- Context API / Zustand (según preferencia)

## 🚀 Instalación y ejecución

1. Clonar el repositorio:
```bash
git clone https://github.com/152004E/OrnamentadoraProyecto.git
Entrar a la carpeta del frontend:

bash


cd frontend
Instalar dependencias:

bash


npm install
Ejecutar en modo desarrollo:

bash


npm run dev
Construir para producción:

bash


npm run build
📁 Estructura recomendada del proyecto
pgsql


frontend/
 ├─ src/
 │  ├─ components/
 │  ├─ pages/
 │  ├─ context/
 │  ├─ hooks/
 │  ├─ services/
 │  ├─ assets/
 │  └─ App.jsx
 ├─ index.html
 └─ package.json
```
