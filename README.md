# 🏛️ OrnamentadoraProyecto

Sistema full-stack profesional para gestión de proyectos de ornamentación, construido con **Clean Architecture** en el backend y **React + TypeScript** en el frontend.

---

## 📋 Descripción General

**OrnamentadoraProyecto** es una plataforma web diseñada para facilitar la gestión integral de proyectos de ornamentación. La arquitectura está cuidadosamente diseñada siguiendo principios SOLID, permitiendo código modular, mantenible y escalable.

**Permite a:**
- **Administradores**: Crear proyectos, subir archivos, eliminar archivos, gestionar la plataforma
- **Clientes**: Ver proyectos, ver archivos, dar likes, comentar

### 🎯 Características Principales
- 👥 Gestión de usuarios con **control de acceso por rol** (Administrador / Cliente)
- 🎨 Creación y seguimiento de proyectos
- 💰 Gestión de transacciones económicas
- 📁 Almacenamiento seguro de archivos asociados a proyectos
- 💬 Sistema de comentarios en tiempo real
- ⭐ Sistema de likes/valoraciones
- 🤝 Gestión de proveedores
- 🔐 Autenticación segura con **JWT** y contraseñas hasheadas con **Bcrypt**

---

## 🔙 Backend - Clean Architecture

### 📥 Instalación y Ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/152004E/OrnamentadoraProyecto.git

# 2. Entrar a la carpeta del backend
cd backEnd

# 3. Instalar dependencias
npm install

# 4. Crear el archivo .env
cat > .env << EOF
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/ornamentadora
JWT_SECRET=tu_clave_secreta_segura
NODE_ENV=development
EOF

# 5. Ejecutar en modo desarrollo (con hot reload)
npm run dev

# 6. Para producción
npm run build
npm start
```

### 🚀 Tecnologías Backend
- **Node.js** - Runtime
- **Express** - Framework web
- **TypeScript** - Tipado estático
- **PostgreSQL** - Base de datos relacional
- **JWT** - Autenticación segura
- **Bcrypt** - Encriptación de contraseñas
- **Multer** - Carga de archivos
- **CORS** - Control de acceso entre dominios

### 📁 Arquitectura: Clean Architecture (4 Capas)

```
                    PRESENTATION
                    (Controllers)
                         ↓
                    APPLICATION
                    (Use Cases)
                         ↓
    ┌───────────────────┬───────────────────┐
    ↓                   ↓                   ↓
DOMAIN            INFRASTRUCTURE        EXTERNAL
(Entities)      (Repositories, DB)     (Services)
```

#### 1️⃣ **CAPA DE DOMINIO** (`src/domain/`)
Núcleo de la aplicación. Contiene la lógica de negocio pura e independiente.

**Entidades (Entities)**
```
src/domain/entities/
├── Usuario.ts              ✓ Modelo de usuario del sistema
├── Proyecto.ts             ✓ Modelo de proyecto
├── Archivo_Proyecto.ts     ✓ Modelo de archivos del proyecto
├── Comentarios.ts          ✓ Modelo de comentarios
├── likes.ts                ✓ Modelo de likes/valoraciones
├── Transacciones.ts        ✓ Modelo de movimientos económicos
└── Proveedores.ts          ✓ Modelo de proveedores
```

**Value Objects** - Objetos inmutables con validación incorporada
```
src/domain/valueObjects/
├── Email.ts                ✓ Email con validación de formato
├── Password.ts             ✓ Contraseña con reglas de validación
├── Rol.ts                  ✓ Roles: ADMIN | CLIENTE
├── Telefono.ts             ✓ Teléfono con validación de formato
├── Monto.ts                ✓ Monto con validación (> 0)
├── LikeTarget.ts           ✓ Tipo de objetivo para likes
└── TipoTransaccion.ts      ✓ Tipos: INGRESO | EGRESO
```

**Interfaces - Contratos** de repositorios
```
src/domain/interfaces/
├── IUsuarioRepository.ts           ✓ Contrato CRUD Usuario
├── IProyectoRepository.ts          ✓ Contrato CRUD Proyecto
├── IArchivo_ProyectoRepository.ts  ✓ Contrato CRUD Archivo
├── IComentariosRepository.ts       ✓ Contrato CRUD Comentarios
├── ILikesRepository.ts             ✓ Contrato CRUD Likes
├── ITransaccionesRepository.ts     ✓ Contrato CRUD Transacciones
└── IProveedoresRepository.ts       ✓ Contrato CRUD Proveedores
```

#### 2️⃣ **CAPA DE APLICACIÓN** (`src/application/`)
Orquesta la lógica de negocio. No contiene lógica de negocio pura.

**Use Cases** - Implementan casos de uso específicos
```
src/application/UseCases/

UsuarioUseCase/
├── CrearUsuario.ts                 ✓ Crea nuevo usuario
├── CrearUsuarioInput.ts            ✓ DTO entrada
├── ActualizarUsuario.ts            ✓ Actualiza datos
├── ActualizarUsuarioInput.ts       ✓ DTO entrada
├── AutenticarUsuario.ts            ✓ Login con JWT
├── BuscarUsuarioPorId.ts           ✓ Búsqueda por ID
├── EliminarUsuario.ts              ✓ Soft delete
└── ListarUsuarios.ts               ✓ Lista todos los usuarios

ProyectoUseCase/
├── CrearProyecto.ts                ✓ Crea nuevo proyecto
├── CrearProyectoInput.ts           ✓ DTO entrada
├── ActualizarProyecto.ts           ✓ Actualiza proyecto
├── ActualizarProyectoInput.ts      ✓ DTO entrada
├── BuscarProyectoPorId.ts          ✓ Búsqueda por ID
├── EliminarProyecto.ts             ✓ Elimina proyecto
└── ListarProyectos.ts              ✓ Lista todos

ArchivoProyectoUseCase/
├── CrearArchivoProyecto.ts         ✓ Carga archivo
├── CrearArchivoProyectoInput.ts    ✓ DTO entrada
├── BuscarArchivoProyectoPorId.ts   ✓ Búsqueda por ID
├── EliminarArchivoProyecto.ts      ✓ Elimina archivo
└── ListarArchivosPorProyecto.ts    ✓ Lista archivos

ComentarioUseCase/
├── CrearComentario.ts              ✓ Crea comentario
├── CrearComentarioInput.ts         ✓ DTO entrada
├── ActualizarComentario.ts         ✓ Actualiza comentario
├── BuscarComentarioPorId.ts        ✓ Búsqueda
├── EliminarComentario.ts           ✓ Elimina
└── ListarComentarioPorProyecto.ts  ✓ Comentarios del proyecto

LikeUseCase/
├── ToggleLike.ts                   ✓ Activar/desactivar like
├── ToggleLikeInput.ts              ✓ DTO entrada
├── ContarLikes.ts                  ✓ Contar likes
└── HasLiked.ts                     ✓ Verificar si fue likeado
```

#### 3️⃣ **CAPA DE INFRAESTRUCTURA** (`src/infrastructure/`)
Implementaciones técnicas y detalles de tecnología.

```
src/infrastructure/

config/                    ← Configuración global
database/
├── postgres.ts           ✓ Conexión a PostgreSQL con pool
├── migrations/           ⏳ Migraciones de BD

orm/                       ← (Preparado para Prisma/Sequelize)

repositories/
├── UsuarioRepository.ts           ✓ Implementa IUsuarioRepository
├── ProyectoRepository.ts          ✓ Implementa IProyectoRepository
├── Archivo_ProyectoRepository.ts  ✓ Implementa IArchivoRepository
├── ComentarioRepository.ts        ✓ Implementa IComentariosRepository
├── LikesRepository.ts             ✓ Implementa ILikesRepository
├── TransaccionesRepository.ts     ⏳ Implementa ITransaccionesRepository
└── ProveedoresRepository.ts       ⏳ Implementa IProveedoresRepository

services/
├── PasswordHasher.ts      ✓ Servicio de encriptación Bcrypt
└── (Otros servicios externos)
```

#### 4️⃣ **CAPA DE PRESENTACIÓN** (`src/presentation/`)
Controladores, rutas y adaptadores HTTP.

```
src/presentation/

controllers/
├── UsuarioController.ts           ✓ Maneja rutas /usuarios
├── AuthController.ts              ✓ Maneja rutas /auth
├── ProyectoController.ts          ✓ Maneja rutas /proyectos
├── ArchivoProyectoController.ts   ✓ Maneja rutas /archivos
├── ComentarioController.ts        ✓ Maneja rutas /comentarios
└── LikesController.ts             ✓ Maneja rutas /likes

routes/
├── usuario.routes.ts              ✓ GET, POST, PUT, DELETE usuarios
├── auth.routes.ts                 ✓ Login, logout, refresh token
├── proyecto.routes.ts             ✓ CRUD proyectos
├── archivoProyecto.routes.ts      ✓ Carga y eliminación de archivos
├── comentario.routes.ts           ✓ CRUD comentarios
└── likes.routes.ts                ⏳ Toggle likes

DTO/                       ← Data Transfer Objects
├── AuthDto/
│   └── CrearUsuarioDto.ts
├── ProyectoDto/
└── UsuariosDto/

Mappers/
├── UsuarioMapper.ts               ✓ Transforma Usuario → Response
├── AuthMapper.ts                  ✓ Transforma Auth → Response
└── (Otros mappers)

middlewares/
├── auth.middleware.ts             ✓ Valida JWT
└── admin.middleware.ts            ✓ Verifica rol ADMIN

types/
└── express/
    └── index.d.ts                 ✓ Extensiones de tipos Express
```

### 📦 Dependencias Backend

```json
{
  "name": "backend",
  "version": "1.0.0",
  "dependencies": {
    "express": "^5.2.1",
    "typescript": "^5.9.3",
    "pg": "^8.16.3",
    "bcrypt": "^6.0.0",
    "jsonwebtoken": "^9.0.3",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "multer": "^2.0.2",
    "pg-hstore": "^2.3.4"
  },
  "devDependencies": {
    "@types/express": "^5.0.6",
    "@types/node": "^24.10.1",
    "@types/bcrypt": "^6.0.0",
    "@types/jsonwebtoken": "^9.0.10",
    "@types/cors": "^2.8.19",
    "@types/multer": "^2.0.0",
    "ts-node-dev": "^2.0.0"
  }
}
```

### 🚀 Scripts Backend

```bash
npm run dev      # Desarrollo con ts-node-dev (hot reload)
npm run build    # Compilar TypeScript → JavaScript
npm start        # Ejecutar en producción
```

### 🎯 Decisión de Negocio - Control de Acceso por Rol

**Solo ADMIN puede:**
- ✓ Crear proyectos
- ✓ Subir archivos (imágenes/videos)
- ✓ Eliminar archivos
- ✓ Editar/eliminar proyectos
- ✓ Gestionar proveedores

**Usuarios normales (CLIENTE) pueden:**
- ✓ Ver proyectos
- ✓ Ver archivos
- ✓ Dar likes a proyectos
- ✓ Comentar en proyectos
- ✓ Ver comentarios

**Beneficio:** Control de acceso centralizado, perfecto para un portafolio profesional.

---

## 🎨 Frontend - Modern React Stack

### 📥 Instalación y Ejecución

```bash
# 1. Entrar a la carpeta del frontend
cd FrontEnd

# 2. Instalar dependencias
npm install

# 3. Crear archivo .env (opcional, si necesitas API externa)
cat > .env << EOF
VITE_API_URL=http://localhost:3000/api
EOF

# 4. Ejecutar en modo desarrollo
npm run dev

# 5. Build para producción
npm run build

# 6. Preview del build
npm run preview

# 7. Linting
npm run lint
```

El frontend estará disponible en **http://localhost:5173**

### 🚀 Tecnologías Frontend
- **React 19** - Framework UI moderno
- **Vite** - Build tool extremadamente rápido (⚡)
- **TypeScript** - Tipado estático
- **React Router v7** - Enrutamiento declarativo
- **Tailwind CSS** - Utilidades CSS
- **Font Awesome** - Iconografía
- **ESLint** - Linting de código

### 📁 Arquitectura: Component-based + Layout Pattern

```
pages/ (Vistas - rutas)
  ↓
components/ (Componentes reutilizables)
  ↓
services/ (Llamadas HTTP)
  ↓
hooks/ (Custom hooks con lógica reutilizable)
```

#### **Estructura Completa del Frontend**

```
src/

assets/                           ← Imágenes, íconos estáticos
└── react.svg

components/                       ← Componentes reutilizables
├── Button.tsx                    ✓ Botón genérico reutilizable
├── Footer.tsx                    ✓ Footer con links y redes sociales
├── FooterLInks.tsx               ✓ Link personalizado del footer
├── Loader.tsx                    ✓ Spinner de carga global
├── Navbar.tsx                    ✓ Barra de navegación
├── ProjectCard.tsx               ✓ Card reutilizable de proyecto
│
└── auth/                         ← Componentes específicos de auth
    ├── AuthBackground.tsx        ✓ Fondo del formulario auth
    ├── AuthButton.tsx            ✓ Botón personalizado
    ├── AuthCheckbox.tsx          ✓ Checkbox personalizado
    ├── AuthFooterLink.tsx        ✓ Link del footer auth
    ├── AuthHeader.tsx            ✓ Encabezado de formulario
    └── AuthInput.tsx             ✓ Input personalizado

└── home/                         ← Componentes de homepage
    └── StatsSection.tsx          ✓ Sección de estadísticas

layouts/                          ← Layouts (estructura base)
├── AuthLayout.tsx                ✓ Layout para páginas de auth
└── MainLayout.tsx                ✓ Layout principal (con Navbar + Footer)

pages/                            ← Vistas (rutas)
├── Home.tsx                      ✓ Landing page / inicio
├── Projects.tsx                  ⏳ Listado de proyectos
├── ProjectDetail.tsx             ⏳ Detalle de proyecto
├── AdminDashboard.tsx            ⏳ Panel de administrador
│
└── auth/                         ← Páginas de autenticación
    ├── Login.tsx                 ✓ Página de login
    ├── Register.tsx              ✓ Página de registro
    └── ForgotPassword.tsx        ✓ Recuperación de contraseña

services/                         ← Servicios HTTP (axios)
├── api.ts                        ⏳ Instancia de axios configurada
├── auth.service.ts               ⏳ Servicios de autenticación
├── project.service.ts            ⏳ Servicios de proyectos
├── comment.service.ts            ⏳ Servicios de comentarios
└── like.service.ts               ⏳ Servicios de likes

hooks/                            ← Custom hooks
├── useAuth.ts                    ⏳ Hook de autenticación
└── useProjects.ts                ⏳ Hook de proyectos

context/                          ← Context API
└── AuthContext.tsx               ⏳ Estado global de autenticación

types/                            ← Tipos TypeScript y DTOs
├── Usuario.ts                    ⏳ Interfaz Usuario
├── Proyecto.ts                   ⏳ Interfaz Proyecto
├── Comentario.ts                 ⏳ Interfaz Comentario
└── Like.ts                       ⏳ Interfaz Like

App.tsx                           ✓ Componente raíz y rutas principales
main.tsx                          ✓ Punto de entrada
index.css                         ✓ Estilos Tailwind + base
```

#### **Flujo de Datos - Ejemplo: Ver Proyectos**

```
USER → Projects.tsx (Page)
  ↓
project.service.ts (Llama API)
  ↓
GET /api/proyectos (Backend)
  ↓
JSON Response
  ↓
useState → Renderiza ProjectCard.tsx
```

### 📦 Dependencias Frontend

```json
{
  "name": "frontend",
  "version": "0.0.0",
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.12.0",
    "@fortawesome/fontawesome-svg-core": "^7.1.0",
    "@fortawesome/free-solid-svg-icons": "^7.1.0",
    "@fortawesome/free-brands-svg-icons": "^7.1.0",
    "@fortawesome/react-fontawesome": "^3.1.1",
    "@tailwindcss/vite": "^4.1.18",
    "tailwindcss": "^4.1.18"
  },
  "devDependencies": {
    "vite": "^7.2.4",
    "@vitejs/plugin-react": "^5.1.1",
    "typescript": "~5.9.3",
    "eslint": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@types/react-router-dom": "^5.3.3"
  }
}
```

### 🚀 Scripts Frontend

```bash
npm run dev        # Desarrollo (Vite dev server)
npm run build      # Build para producción
npm run lint       # Validar código
npm run preview    # Preview del build
```

---

## 🗄️ Modelo de Datos - Entidades Principales

### **Usuario**
```typescript
{
  id_usuario: number (PK)
  nombre: string
  correo: Email (VO)
  contraseña: Password (VO) - hasheada con bcrypt
  telefono: Telefono (VO)
  direccion: string
  rol: Rol (VO) - ADMIN | CLIENTE
  estado: boolean - soft delete
  fecha_creacion_cuenta: Date
  fecha_actualizacion: Date
}
```

### **Proyecto**
```typescript
{
  id_proyecto: number (PK)
  id_usuario: number (FK)
  nombre_proyecto: string
  descripcion: string
  fecha_creacion: Date
  fecha_entrega: Date
  estado: boolean
}
```

### **Archivo_Proyecto**
```typescript
{
  id_archivo: number (PK)
  id_proyecto: number (FK)
  ruta_archivo: string
  tipo_archivo: string
  tamaño_archivo: number
  fecha_subida: Date
}
```

### **Comentarios**
```typescript
{
  id_comentario: number (PK)
  id_proyecto: number (FK)
  id_usuario: number (FK)
  contenido: text
  fecha_comentario: Date
  estado: boolean - soft delete
}
```

### **Likes**
```typescript
{
  id_like: number (PK)
  id_proyecto: number (FK)
  id_usuario: number (FK)
  fecha_like: Date
}
```

### **Transacciones**
```typescript
{
  id_transaccion: number (PK)
  id_proyecto: number (FK)
  monto: Monto (VO)
  tipo_transaccion: TipoTransaccion (VO) - INGRESO | EGRESO
  fecha_transaccion: Date
  descripcion: string
  estado: boolean
}
```

### **Proveedores**
```typescript
{
  id_proveedor: number (PK)
  nombre: string
  contacto: string
  email: Email (VO)
  especialidad: string
  estado: boolean
  fecha_creacion: Date
}
```

---

## 🔐 Patrones y Principios Implementados

### ✅ SOLID Principles & Design Patterns

| Patrón | Implementación | Beneficio |
|--------|---|---|
| **Repository Pattern** | Interfaces en `domain/`, implementadas en `infrastructure/` | Desacoplamiento de BD, fácil testing |
| **Dependency Injection** | Inyección en constructores de Use Cases | Inversión de control, mayor testabilidad |
| **Value Objects** | Clases inmutables con validación | Encapsulación de reglas de negocio |
| **Mapper Pattern** | `UsuarioMapper`, `AuthMapper` | Separación de modelos internos y respuestas HTTP |
| **DTO Pattern** | `CrearUsuarioInput`, etc | Validación de entrada en capas |
| **Middleware Pattern** | `auth.middleware`, `admin.middleware` | Validación de acceso antes de controladores |

### 🏛️ Clean Architecture Benefits

✅ **Independencia de Frameworks** - Cambiar Express por Fastify sin tocar dominio  
✅ **Testeabilidad** - Lógica de negocio sin dependencias de BD  
✅ **Escalabilidad** - Nuevas features sin afectar código existente  
✅ **Mantenibilidad** - Responsabilidades claras por capa  
✅ **Aislamiento de Dependencias** - Flujo de dependencias unidireccional  

---

## 📊 Flujo Completo de Datos

### Ejemplo: Crear un Usuario

```
1. PRESENTACIÓN (Frontend)
   user clicks "Register" button
   → form data sent to API
   
2. PRESENTACIÓN (Backend - Controller)
   POST /api/usuarios/register
   → UsuarioController.crear()
   → valida request body
   
3. APLICACIÓN (Use Case)
   CUCrearUsuario.execute(data)
   → valida email único
   → valida contraseña
   → hashea contraseña con bcrypt
   
4. DOMINIO (Domain)
   new Usuario(...)
   → crea entidades y VOs
   → aplica reglas de negocio
   
5. INFRAESTRUCTURA (Repository)
   UsuarioRepository.crear(usuario)
   → INSERT en PostgreSQL
   
6. RESPUESTA
   UsuarioMapper.toResponse()
   → respuesta JSON al frontend
```

---

## ✅ Estado del Proyecto

### ✓ Completado

**Backend:**
- ✓ Estructura Clean Architecture (4 capas)
- ✓ Entidades de dominio (7 entidades)
- ✓ Value Objects con validación
- ✓ Interfaces de repositorio
- ✓ Use Cases para Usuario (8 casos de uso)
- ✓ Middlewares de autenticación y admin
- ✓ Mappers para transformación de datos
- ✓ Configuración de base de datos PostgreSQL
- ✓ Autenticación JWT
- ✓ Encriptación de contraseñas con Bcrypt
- ✓ CORS configurado
- ✓ Carga de archivos con Multer

**Frontend:**
- ✓ Setup React 19 + TypeScript + Vite
- ✓ Configuración Tailwind CSS
- ✓ React Router v7
- ✓ Layout Pattern (AuthLayout + MainLayout)
- ✓ Componentes base (Button, Footer, Navbar)
- ✓ Componentes de autenticación
- ✓ Páginas de Login y Register
- ✓ ESLint configurado

### 🚧 En Desarrollo

**Backend:**
- ⏳ Repositorios de Proyecto
- ⏳ Repositorios de Comentarios
- ⏳ Repositorios de Likes
- ⏳ Repositorios de Transacciones
- ⏳ Repositorios de Proveedores
- ⏳ Use Cases de Proyecto
- ⏳ Use Cases de Comentarios
- ⏳ Use Cases de Likes
- ⏳ Controladores de Proyecto
- ⏳ Controladores de Comentarios
- ⏳ Rutas de Proyecto
- ⏳ Rutas de Comentarios

**Frontend:**
- ⏳ Servicio de API (axios)
- ⏳ Custom hooks (useAuth, useProjects)
- ⏳ Context de autenticación
- ⏳ Página de proyectos
- ⏳ Detalle de proyecto
- ⏳ Panel de administrador
- ⏳ Componentes de proyecto
- ⏳ Formularios dinámicos
- ⏳ Integración con backend

### 📋 Por Hacer

- ⬜ Pruebas unitarias (Jest, vitest)
- ⬜ Pruebas de integración
- ⬜ Documentación API (Swagger/OpenAPI)
- ⬜ Validaciones avanzadas (Zod, Yup)
- ⬜ Manejo de errores global con HttpException
- ⬜ Rate limiting
- ⬜ Caching con Redis
- ⬜ CI/CD pipeline (GitHub Actions)
- ⬜ Dockerización (Dockerfile, docker-compose)
- ⬜ Deploy (Vercel, Railway, Heroku)
- ⬜ Internacionalización (i18n)
- ⬜ Tema oscuro/claro
- ⬜ Búsqueda y filtros avanzados
- ⬜ Paginación
- ⬜ Optimización de imágenes

---

## 📞 Contacto y Soporte

Este proyecto está en desarrollo activo. Para sugerencias, reportar bugs o contribuciones:

**GitHub:** [OrnamentadoraProyecto](https://github.com/152004E/OrnamentadoraProyecto)

---

## 📄 Licencia

ISC License - Ver archivo LICENSE para más detalles

---

**Última actualización:** Enero 2026  
**Versión:** 1.0.0 (En desarrollo activo)  
**Mantener:** [152004E](https://github.com/152004E)
**Última actualización:** Diciembre 2025  
**Versión:** 1.0.0 (En desarrollo)

---

## 📄 Versionamiento y Manejo de Ramas (Git/GitHub)

### Configuración Inicial de Ramas

#### 1️⃣ Traer las ramas remotas
```bash
git fetch origin
```

#### 2️⃣ Ver ramas remotas disponibles
```bash
git branch -r
```

**Esperado:**
```
origin/main
origin/develop
```

#### 3️⃣ Crear y conectar la rama local develop
```bash
git switch -c develop origin/develop
```

💡 **Esto hace:**
- Crea la rama local `develop`
- La conecta automáticamente con `origin/develop`
- Te cambia a esa rama

#### 4️⃣ Verificar ramas locales
```bash
git branch
```

**Esperado:**
```
* develop
  main
```

---

### 🔄 Flujo de Trabajo Recomendado

- **`main`**: Código en producción (estable)
- **`develop`**: Rama de desarrollo (integración)
- **Feature branches**: Ramas para nuevas funcionalidades (`feature/nombre`)

---

