# 🎨 Frontend -- Ornamentadora Proyecto

Este es el frontend de la plataforma Ornamentadora Proyecto,
desarrollado con **React + TypeScript** y **Tailwind CSS**, siguiendo
principios de arquitectura limpia y separación de responsabilidades.

El objetivo del frontend es consumir el backend construido con Clean
Architecture y ofrecer una interfaz:

-   Moderna y profesional\
-   Clara y fácil de usar\
-   Escalable y mantenible\
-   Adaptada a control de acceso por rol (ADMIN / CLIENTE)

------------------------------------------------------------------------

## 🎯 Decisión de negocio (alineada con el backend)

Solo el **ADMIN** puede:

-   Crear proyectos\
-   Subir archivos (imágenes / videos)\
-   Eliminar archivos\
-   Editar o eliminar proyectos

Usuarios normales pueden:

-   Ver proyectos\
-   Ver archivos\
-   Dar likes\
-   Comentar

💡 Esto es **control de acceso por rol**, no por dueño del recurso.\
Perfecto para un portafolio profesional.

------------------------------------------------------------------------

## 🚀 Tecnologías utilizadas

-   **React 18**
-   **Vite**
-   **TypeScript**
-   **Tailwind CSS**
-   **React Router DOM**
-   **Axios**
-   **JWT (autenticación)**
-   **Font Awesome / Lucide (íconos)**

------------------------------------------------------------------------

## 📥 Instalación y ejecución

### 1️⃣ Clonar el repositorio

``` bash
git clone https://github.com/152004E/OrnamentadoraProyecto.git
```

### 2️⃣ Entrar a la carpeta del frontend

``` bash
cd frontend
```

### 3️⃣ Instalar dependencias

``` bash
npm install
```

### 4️⃣ Crear el archivo `.env`

``` env
VITE_API_URL=http://localhost:4000/api
```

### 5️⃣ Ejecutar en modo desarrollo

``` bash
npm run dev
```

### 6️⃣ Build para producción

``` bash
npm run build
```

------------------------------------------------------------------------

## 📁 Estructura del proyecto (Frontend Architecture)

### **Arquitectura por capas del frontend**

    PAGES (Vistas)
       ↓
    COMPONENTS (UI reutilizable)
       ↓
    SERVICES (Llamadas HTTP)
       ↓
    TYPES / DTOs

------------------------------------------------------------------------

### **Estructura de archivos completa**

    frontend/
    ├─ public/
    │  └─ (assets estáticos)
    │
    ├─ src/
    │  ├─ assets/                        ← Imágenes, logos, íconos
    │  │
    │  ├─ components/                    ← Componentes reutilizables UI
    │  │  ├─ Navbar.tsx                  ✓ Barra de navegación
    │  │  ├─ Footer.tsx                  ✓ Pie de página
    │  │  ├─ ProjectCard.tsx             ✓ Card de proyecto
    │  │  ├─ Button.tsx                  ✓ Botón reutilizable
    │  │  └─ Loader.tsx                  ✓ Loader global
    │  │
    │  ├─ pages/                         ← Vistas (rutas)
    │  │  ├─ Home.tsx                    ✓ Landing page
    │  │  ├─ Projects.tsx                ✓ Listado de proyectos
    │  │  ├─ ProjectDetail.tsx           ✓ Detalle de proyecto
    │  │  ├─ Login.tsx                   ✓ Login
    │  │  ├─ Profile.tsx                 ✓ Perfil de usuario
    │  │  └─ AdminDashboard.tsx          ✓ Panel ADMIN
    │  │
    │  ├─ services/                      ← Comunicación con backend
    │  │  ├─ api.ts                      ✓ Axios instance
    │  │  ├─ auth.service.ts             ✓ Login / logout
    │  │  ├─ project.service.ts          ✓ Proyectos API
    │  │  ├─ comment.service.ts          ✓ Comentarios API
    │  │  └─ like.service.ts             ✓ Likes API
    │  │
    │  ├─ hooks/                         ← Custom hooks
    │  │  ├─ useAuth.ts                  ✓ Hook de autenticación
    │  │  └─ useProjects.ts              ✓ Hook de proyectos
    │  │
    │  ├─ context/                       ← Context API
    │  │  └─ AuthContext.tsx             ✓ Estado global auth
    │  │
    │  ├─ types/                         ← Tipos y DTOs
    │  │  ├─ Usuario.ts
    │  │  ├─ Proyecto.ts
    │  │  ├─ Comentario.ts
    │  │  └─ Like.ts
    │  │
    │  ├─ App.tsx                        ← Rutas principales
    │  ├─ main.tsx                       ← Entry point
    │  └─ index.css                      ← Tailwind base
    │
    ├─ index.html
    ├─ package.json
    ├─ tsconfig.json
    ├─ vite.config.ts
    └─ README.md

**Leyenda:** - ✓ = Implementado\
- ⏳ = En desarrollo

------------------------------------------------------------------------

## 🔗 Flujo de una solicitud (Ej: Ver proyectos)

    USER REQUEST (GET /proyectos)
        ↓
    [PAGE]
      Projects.tsx
        ↓
    [SERVICE]
      project.service.ts → axios.get("/proyectos")
        ↓
    [BACKEND API]
      GET /api/proyectos
        ↓
    [RESPONSE]
      JSON → setState → render ProjectCard

------------------------------------------------------------------------

## 🎯 Reglas de dependencia (Frontend)

  Capa         Puede importar de             NO puede importar de
  ------------ ----------------------------- ----------------------
  Pages        Components, Services, Hooks   ---
  Components   Types, Hooks                  Pages
  Services     Axios, Types                  Components, Pages
  Hooks        Services, Types               Pages
  Context      Services, Types               Pages
  Types        ---                           Todo lo demás

------------------------------------------------------------------------

## ✅ Patrones aplicados

1.  **Separación de responsabilidades**\
2.  **Servicios HTTP aislados**\
3.  **Componentes reutilizables**\
4.  **Hooks personalizados**\
5.  **Control de acceso por rol**\
6.  **Context API para auth**

------------------------------------------------------------------------

## 🗄️ Vistas del sistema

### Públicas

-   Home\
-   Listado de proyectos\
-   Detalle de proyecto

### Autenticación

-   Login

### Usuario autenticado

-   Perfil\
-   Likes\
-   Comentarios

### ADMIN

-   Dashboard\
-   Crear proyecto\
-   Editar proyecto\
-   Subir archivos\
-   Eliminar archivos

------------------------------------------------------------------------

## 📦 Dependencias principales

-   react\
-   react-dom\
-   react-router-dom\
-   axios

------------------------------------------------------------------------

## 🛠 Dependencias de desarrollo

-   typescript\
-   tailwindcss\
-   postcss\
-   autoprefixer\
-   vite\
-   eslint

------------------------------------------------------------------------

## 📋 Roadmap - Pendientes por implementar

### **Fase 1: Base UI** 🎨

  Tarea                Descripción           Prioridad   Estado
  -------------------- --------------------- ----------- --------
  1️⃣ Navbar            Barra de navegación   🔴 Alta     ✓
  2️⃣ Home              Landing page          🔴 Alta     ✓
  3️⃣ Cards proyectos   UI de proyectos       🔴 Alta     ⏳

------------------------------------------------------------------------

### **Fase 2: Integración API** 🔗

  Tarea                 Descripción          Prioridad   Estado
  --------------------- -------------------- ----------- --------
  4️⃣ Axios config       api.ts               🔴 Alta     ⏳
  5️⃣ Listar proyectos   GET /proyectos       🔴 Alta     ⏳
  6️⃣ Detalle proyecto   GET /proyectos/:id   🔴 Alta     ⏳

------------------------------------------------------------------------

### **Fase 3: Auth y roles** 🔐

  Tarea                 Descripción        Prioridad   Estado
  --------------------- ------------------ ----------- --------
  7️⃣ Login              JWT login          🔴 Alta     ⏳
  8️⃣ Guardas de rutas   Rutas protegidas   🔴 Alta     ⏳
  9️⃣ Control por rol    ADMIN / CLIENTE    🔴 Alta     ⏳

------------------------------------------------------------------------

### **Fase 4: Funcionalidades** ⚙️

  Tarea                  Descripción        Prioridad   Estado
  ---------------------- ------------------ ----------- --------
  🔟 Likes               Toggle likes       🟡 Media    ⏳
  1️⃣1️⃣ Comentarios       CRUD comentarios   🟡 Media    ⏳
  1️⃣2️⃣ Subida archivos   Multer backend     🟡 Media    ⏳

------------------------------------------------------------------------

### **Fase 5: UI Pro** 🚀

  Tarea                Descripción       Prioridad   Estado
  -------------------- ----------------- ----------- --------
  1️⃣3️⃣ Responsive      Mobile friendly   🟡 Media    ⏳
  1️⃣4️⃣ Loader global   UX feedback       🟡 Media    ⏳
  1️⃣5️⃣ Toasts          Notificaciones    🟢 Baja     ⏳

------------------------------------------------------------------------

**Leyenda:** - 🔴 = Prioridad Alta\
- 🟡 = Prioridad Media\
- 🟢 = Prioridad Baja\
- ✓ = Completado\
- ⏳ = En progreso


🎨 Paleta de colores recomendada (Blanco & Azul)
🔵 Color primario (identidad)

👉 Azul confiable / corporativo

#1E3A8A   (Azul fuerte – headers, botones principales)

🔷 Azul secundario (acciones y hover)
#2563EB   (Azul moderno – botones, links, iconos activos)

🔹 Azul suave (fondos secundarios)
#DBEAFE   (Fondos de cards, secciones)

⚪ Blanco base
#FFFFFF   (Fondo principal)

⚫ Texto principal
#1F2937   (Texto oscuro, no negro puro)

⚪ Texto secundario
#6B7280   (Subtítulos, labels, placeholders)

🚨 Error / Warning (cuando lo necesites)
#DC2626   (Errores)
#16A34A   (Éxito)

🧱 Tipografía recomendada
🔤 Fuente principal

Inter o Poppins
(Son modernas, limpias y muy usadas en apps profesionales)

font-family: 'Inter', sans-serif;

📐 Tamaños de fuente (MUY importantes)
Elemento	Tamaño
Título principal (h1)	32px
Subtítulos (h2)	24px
h3	20px
Texto normal	16px
Texto secundario	14px
Labels / inputs	14–15px
Botones	15–16px