# OrnamentadoraProyecto

Sistema full-stack para gestión de proyectos de ornamentación con arquitectura de capas (Clean Architecture) en el backend y frontend moderno con React.

---

## 📋 Descripción General

**OrnamentadoraProyecto** es una plataforma web diseñada para facilitar la gestión integral de proyectos de ornamentación. Permite a usuarios (Administradores y Clientes) crear proyectos, gestionar transacciones, manejar archivos del proyecto, y mantener comunicación mediante comentarios y likes.

### Características Principales
- 👥 Gestión de usuarios con roles diferenciados
- 🎨 Creación y seguimiento de proyectos
- 💰 Gestión de transacciones económicas
- 📁 Almacenamiento de archivos asociados a proyectos
- 💬 Sistema de comentarios y valoraciones
- 🤝 Gestión de proveedores
- 🔐 Autenticación y autorización con JWT

---

## 🏗️ Arquitectura del Proyecto

### Estructura General
```
OrnamentadoraProyecto/
├── backEnd/                    # Servidor Node.js con TypeScript
│   ├── src/
│   │   ├── domain/            # Lógica de negocio pura
│   │   ├── application/       # Casos de uso
│   │   ├── infrastructure/    # Implementaciones técnicas
│   │   └── presentation/      # Controladores (por implementar)
│   └── package.json
└── FrontEnd/                   # Cliente React + Vite
    ├── src/
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── assets/
    └── package.json
```

---

## 🔙 Backend

### Arquitectura: Clean Architecture (Capas)

El backend sigue el patrón de **Clean Architecture** con tres capas principales:

#### 1️⃣ **CAPA DE DOMINIO** (`src/domain/`)
Contiene la lógica de negocio pura, independiente de cualquier framework o tecnología.

**Entidades (Entities)**
```
├── entities/
│   ├── Usuario.ts           # Modelo de usuario
│   ├── Proyecto.ts          # Modelo de proyecto
│   ├── Archivo_Proyecto.ts  # Archivos asociados a proyectos
│   ├── Comentarios.ts       # Sistema de comentarios
│   ├── Likes.ts             # Valoraciones/likes
│   ├── Transacciones.ts     # Movimientos económicos
│   └── Proveedores.ts       # Gestión de proveedores
```

**Value Objects**
```
├── valueObjects/
│   ├── Email.ts             # Email validado
│   ├── Password.ts          # Contraseña con reglas
│   ├── Rol.ts               # Roles: Administrador, Cliente
│   ├── Telefono.ts          # Teléfono validado
│   ├── Monto.ts             # Monto de transacciones
│   └── TipoTransaccion.ts   # Tipos de transacciones
```

**Interfaces (Contracts)**
```
├── interfaces/
│   ├── IUsuarioRepository.ts           # Contrato para Usuario
│   ├── IProyectoRepository.ts          # Contrato para Proyecto
│   ├── IArchivo_ProyectoRepository.ts  # Contrato para Archivos
│   ├── IComentariosRepository.ts       # Contrato para Comentarios
│   ├── ILikesRepository.ts             # Contrato para Likes
│   ├── ITransaccionesRepository.ts     # Contrato para Transacciones
│   └── IProveedoresRepository.ts       # Contrato para Proveedores
```

#### 2️⃣ **CAPA DE APLICACIÓN** (`src/application/`)
Contiene los casos de uso (Use Cases) que orquestan la lógica de negocio.

**DTOs (Data Transfer Objects)**
```
├── DTO/
│   └── CrearUsuarioDTO.ts    # Estructura para crear usuarios
│       ├── nombre: string
│       ├── correo: string
│       ├── contraseña: string
│       ├── telefono: string
│       ├── direccion: string
│       └── rol: "Administrador" | "Cliente"
```

**Use Cases**
```
├── UseCases/
│   └── CrearUsuario.ts       # Caso de uso para crear usuario
│       - Valida email único
│       - Valida contraseña
│       - Crea entidad Usuario
│       - Persiste en repositorio
```

#### 3️⃣ **CAPA DE INFRAESTRUCTURA** (`src/infrastructure/`)
Implementaciones técnicas (repositorios, bases de datos, servicios externos).
*Actualmente en desarrollo*

#### 4️⃣ **CAPA DE PRESENTACIÓN** (`src/presentation/`)
Controladores y manejo de rutas HTTP.
*Actualmente en desarrollo*

---

### 📦 Dependencias Backend

```json
{
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
# Desarrollo con hot reload
npm run dev

# Compilar TypeScript
npm run build

# Ejecutar en producción
npm start
```

---

## 🎨 Frontend

### Tecnologías
- **React 19**: Framework UI
- **Vite**: Build tool y dev server (⚡ extremadamente rápido)
- **TypeScript**: Tipado estático
- **ESLint**: Linting de código

### Estructura
```
src/
├── App.tsx          # Componente raíz
├── App.css          # Estilos globales
├── main.tsx         # Punto de entrada
├── index.css        # Estilos de reset
└── assets/          # Recursos estáticos
```

### 📦 Dependencias Frontend

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "vite": "^7.2.4",
    "@vitejs/plugin-react": "^5.1.1",
    "typescript": "~5.9.3",
    "eslint": "^9.39.1"
  }
}
```

### 🚀 Scripts Frontend

```bash
# Desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Linting
npm run lint

# Preview del build
npm run preview
```

---

## 🗄️ Modelo de Datos

### Entidades Principales

#### **Usuario**
- `id_usuario`: number (PK)
- `nombre`: string
- `correo`: Email (VO)
- `contraseña`: Password (VO)
- `telefono`: Telefono (VO)
- `rol`: Rol (VO) - Administrador | Cliente
- Timestamps: fecha_creacion, fecha_actualizacion

#### **Proyecto**
- `id_proyecto`: number (PK)
- `id_usuario`: number (FK)
- `nombre_proyecto`: string
- `descripcion`: string
- `fecha_creacion`: Date
- `fecha_entrega`: Date
- `estado`: boolean

#### **Archivo_Proyecto**
- `id_archivo`: number (PK)
- `id_proyecto`: number (FK)
- `ruta_archivo`: string
- `tipo_archivo`: string
- `fecha_subida`: Date

#### **Comentarios**
- `id_comentario`: number (PK)
- `id_proyecto`: number (FK)
- `id_usuario`: number (FK)
- `contenido`: text
- `fecha_comentario`: Date

#### **Likes**
- `id_like`: number (PK)
- `id_proyecto`: number (FK)
- `id_usuario`: number (FK)
- `fecha_like`: Date

#### **Transacciones**
- `id_transaccion`: number (PK)
- `id_proyecto`: number (FK)
- `monto`: Monto (VO)
- `tipo_transaccion`: TipoTransaccion (VO)
- `fecha_transaccion`: Date
- `descripcion`: string

#### **Proveedores**
- `id_proveedor`: number (PK)
- `nombre`: string
- `contacto`: string
- `especialidad`: string
- Timestamps

---

## 🔐 Patrones Implementados

### Value Objects (Objetos de Valor)
Objetos inmutables que representan conceptos del negocio con validación incorporada:
- **Email**: Validación de formato de email
- **Password**: Validación de contraseña fuerte
- **Rol**: Enum seguro de roles
- **Telefono**: Validación de formato telefónico
- **Monto**: Validación de moneda/monto
- **TipoTransaccion**: Tipos de transacciones permitidas

### Repository Pattern
Interfaces definidas en `domain/interfaces/` para abstraer el acceso a datos:
- Desacoplamiento de la lógica de negocio
- Facilita testing y cambios de tecnología
- Inversión de control

### Clean Architecture Benefits
✅ Independencia de frameworks  
✅ Testeable  
✅ Escalable  
✅ Mantenible  
✅ Aislamiento de responsabilidades  

---

## 🛠️ Instalación y Configuración

### Backend

```bash
cd backEnd
npm install
npm run dev
```

Requisitos:
- Node.js 18+
- PostgreSQL
- Variables de entorno (crear `.env`):
  ```
  DATABASE_URL=postgresql://user:password@localhost:5432/ornamentadora
  JWT_SECRET=tu_secret_key
  PORT=3000
  NODE_ENV=development
  ```

### Frontend

```bash
cd FrontEnd
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

---

## 📚 Flujo de Datos

```
Cliente (React)
    ↓
API REST (Express)
    ↓
Use Cases (Aplicación)
    ↓
Entidades + Value Objects (Dominio)
    ↓
Repositorios (Infraestructura)
    ↓
PostgreSQL
```

---

## ✅ Estado del Proyecto

### ✅ Completado
- ✓ Estructura Clean Architecture
- ✓ Entidades de dominio
- ✓ Value Objects con validación
- ✓ Interfaces de repositorio
- ✓ Caso de uso CrearUsuario
- ✓ DTO CrearUsuarioDTO
- ✓ Setup Frontend (React + Vite + TypeScript)

### 🚧 En Desarrollo
- ⏳ Capa de Infraestructura (Repositorios)
- ⏳ Capa de Presentación (Controladores)
- ⏳ Conexión a PostgreSQL
- ⏳ Componentes React
- ⏳ Rutas y navegación

### 📋 Por Hacer
- ⬜ Autenticación/Autorización
- ⬜ Pruebas unitarias
- ⬜ Documentación API (Swagger)
- ⬜ Validaciones avanzadas
- ⬜ Manejo de errores global
- ⬜ CI/CD pipeline
- ⬜ Docker

---

## 👥 Roles de Usuario

### **Administrador**
- Gestión completa de usuarios
- Creación de proyectos
- Supervisión de transacciones
- Gestión de proveedores

### **Cliente**
- Crear y gestionar sus propios proyectos
- Ver proyectos disponibles
- Comentar y valorar proyectos
- Participar en transacciones

---

## 📞 Contacto y Contribución

Este es un proyecto en desarrollo activo. Para sugerencias, bugs o contribuciones, contactar al equipo de desarrollo.

---

## 📄 Licencia

ISC License - Ver archivo LICENSE para más detalles

---

**Última actualización:** Diciembre 2025  
**Versión:** 1.0.0 (En desarrollo)
