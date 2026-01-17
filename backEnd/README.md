# 🔧 Backend -- Ornamentadora Proyecto

Este es el backend de la plataforma Ornamentadora Proyecto, desarrollado bajo los principios de Clean Architecture, lo que permite una estructura modular, mantenible y escalable.
La lógica de negocio se mantiene completamente separada de frameworks, infraestructura y controladores, garantizando:

Código más limpio y fácil de probar

Independencia entre capas

Facilidad para agregar nuevas funcionalidades

Menor acoplamiento entre módulos

El sistema gestiona toda la lógica de negocio, autenticación, operaciones CRUD con el soft delete, proyectos, transacciones, proveedores, comentarios y carga de archivos, manteniendo una arquitectura robusta y profesional.


🎯 Decisión de negocio (MUY BIEN DEFINIDA)

Solo el ADMIN puede:

Crear proyectos

Subir archivos (imágenes / videos)

Eliminar archivos

Usuarios normales pueden:

Ver proyectos

Ver archivos

Dar likes

Comentar

💡 Esto es control de acceso por rol, no por dueño del recurso.
Perfecto para un portafolio profesional.

------------------------------------------------------------------------

## 🚀 Tecnologías utilizadas

-   **Node.js**
-   **Express**
-   **PostgreSQL**
-   **Prisma / Sequelize** (a elegir)
-   **JWT (autenticación)**
-   **Bcrypt (encriptación)**
-   **Multer (subida de archivos)**
-   **TypeScript**

------------------------------------------------------------------------

## 📥 Instalación y ejecución

### 1️⃣ Clonar el repositorio

``` bash
git clone https://github.com/152004E/OrnamentadoraProyecto.git
```

### 2️⃣ Entrar a la carpeta del backend

``` bash
cd backend
```

### 3️⃣ Instalar dependencias

``` bash
npm install
```

### 4️⃣ Crear el archivo `.env` con:

``` env
PORT=4000
DATABASE_URL=postgres://user:password@localhost:5432/ornamentadora
JWT_SECRET=tu_clave_secreta
```

### 5️⃣ Ejecutar en modo desarrollo

``` bash
npm run dev
```

### 6️⃣ Ejecutar para producción

``` bash
npm start
```

------------------------------------------------------------------------

## 📁 Estructura del proyecto (Clean Architecture)

### **Arquitectura por capas y sus dependencias**

```
                    PRESENTATION
                         ↓
                    APPLICATION
                         ↓
    ┌───────────────────┬───────────────────┐
    ↓                   ↓                   ↓
INFRASTRUCTURE      DOMAIN              EXTERNAL
```

### **Estructura de archivos completa**

```
backEnd/
├─ src/
│  ├─ domain/                               ← 🏛️  NÚCLEO (no depende de nada)
│  │  ├─ entities/
│  │  │  ├─ Usuario.ts                     ✓ Entidad principal de usuario
│  │  │  ├─ Proyecto.ts                    ✓ Entidad de proyecto
│  │  │  ├─ Archivo_Proyecto.ts            ✓ Entidad de archivos de proyecto
│  │  │  ├─ Comentarios.ts                 ✓ Entidad de comentarios
│  │  │  ├─ likes.ts                       ✓ Entidad de likes
│  │  │  ├─ Transacciones.ts               ✓ Entidad de transacciones
│  │  │  └─ Proveedores.ts                 ✓ Entidad de proveedores
│  │  │
│  │  ├─ valueObjects/
│  │  │  ├─ Email.ts                       ✓ Valida formato email
│  │  │  ├─ Password.ts                    ✓ Validación de contraseña
│  │  │  ├─ Rol.ts                         ✓ ADMIN | CLIENTE
│  │  │  ├─ Telefono.ts                    ✓ Valida formato teléfono
│  │  │  ├─ Monto.ts                       ✓ Validación de monto > 0
│  │  │  ├─ LikeTarget.ts                  ✓ Tipo de objetivo para likes
│  │  │  └─ TipoTransaccion.ts             ✓ INGRESO | EGRESO
│  │  │
│  │  └─ interfaces/
│  │     ├─ IUsuarioRepository.ts          ✓ Contrato para UsuarioRepository
│  │     ├─ IProyectoRepository.ts         ✓ Contrato para ProyectoRepository
│  │     ├─ IArchivo_ProyectoRepository.ts ✓ Contrato para ArchivoProyectoRepository
│  │     ├─ IComentariosRepository.ts      ✓ Contrato para ComentariosRepository
│  │     ├─ ILikesRepository.ts            ✓ Contrato para LikesRepository
│  │     ├─ ITransaccionesRepository.ts    ✓ Contrato para TransaccionesRepository
│  │     └─ IProveedoresRepository.ts      ✓ Contrato para ProveedoresRepository
│  │
│  ├─ application/                         ← 📋 Depende de Domain
│  │  └─ UseCases/
│  │     ├─ UsuarioUseCase/
│  │     │  ├─ CrearUsuario.ts             ✓ Crea nuevo usuario
│  │     │  ├─ CrearUsuarioInput.ts        ✓ DTO de entrada para crear usuario
│  │     │  ├─ ActualizarUsuario.ts        ✓ Actualiza datos de usuario
│  │     │  ├─ ActualizarUsuarioInput.ts   ✓ DTO para actualizar usuario
│  │     │  ├─ AutenticarUsuario.ts        ✓ Autentica usuario con JWT
│  │     │  ├─ BuscarUsuarioPorId.ts       ✓ Busca usuario por ID
│  │     │  ├─ EliminarUsuario.ts          ✓ Elimina usuario
│  │     │  └─ ListarUsuarios.ts           ✓ Obtiene todos los usuarios
│  │     │
│  │     ├─ ProyectoUseCase/
│  │     │  ├─ CrearProyecto.ts            ✓ Crea nuevo proyecto
│  │     │  ├─ CrearProyectoInput.ts       ✓ DTO de entrada para crear proyecto
│  │     │  ├─ ActualizarProyecto.ts       ✓ Actualiza datos de proyecto
│  │     │  ├─ ActualizarProyectoInput.ts  ✓ DTO para actualizar proyecto
│  │     │  ├─ BuscarProyectoPorId.ts      ✓ Busca proyecto por ID
│  │     │  ├─ EliminarProyecto.ts         ✓ Elimina proyecto
│  │     │  └─ ListarProyectos.ts          ✓ Obtiene todos los proyectos
│  │     │
│  │     ├─ ArchivoProyectoUseCase/
│  │     │  ├─ CrearArchivoProyecto.ts     ✓ Crea nuevo archivo de proyecto
│  │     │  ├─ CrearArchivoProyectoInput.ts ✓ DTO de entrada para crear archivo
│  │     │  ├─ BuscarArchivoProyectoPorId.ts ✓ Busca archivo por ID
│  │     │  ├─ EliminarArchivoProyecto.ts  ✓ Elimina archivo
│  │     │  └─ ListarArchivosPorProyecto.ts ✓ Lista archivos de un proyecto
│  │     │
│  │     ├─ ComentarioUseCase/
│  │     │  ├─ CrearComentario.ts          ✓ Crea nuevo comentario
│  │     │  ├─ CrearComentarioInput.ts     ✓ DTO de entrada para crear comentario
│  │     │  ├─ ActualizarComentario.ts     ✓ Actualiza comentario
│  │     │  ├─ ActualizarComentarioInput.ts ✓ DTO para actualizar comentario
│  │     │  ├─ BuscarComentarioPorId.ts    ✓ Busca comentario por ID
│  │     │  ├─ EliminarComentario.ts       ✓ Elimina comentario
│  │     │  └─ ListarComentarioPorProyecto.ts ✓ Lista comentarios de un proyecto
│  │     │
│  │     └─ LikeUseCase/
│  │        ├─ ToggleLike.ts               ✓ Activa/desactiva un like
│  │        ├─ ToggleLikeInput.ts          ✓ DTO para toggle de like
│  │        ├─ ContarLikes.ts              ✓ Cuenta likes de un objetivo
│  │        └─ HasLiked.ts                 ✓ Verifica si usuario ha dado like
│  │
│  ├─ infrastructure/                      ← 🔧 Depende de Domain + App
│  │  ├─ config/
│  │  │  └─ (Archivos de configuración)
│  │  │
│  │  ├─ database/
│  │  │  └─ postgres.ts                    ✓ Conexión a PostgreSQL
│  │  │
│  │  ├─ orm/
│  │  │  └─ (Prisma o Sequelize)
│  │  │
│  │  ├─ repositories/
│  │  │  ├─ UsuarioRepository.ts           ✓ Implementa IUsuarioRepository
│  │  │  ├─ ProyectoRepository.ts          ✓ Implementa IProyectoRepository
│  │  │  ├─ Archivo_ProyectoRepository.ts  ✓ Implementa IArchivo_ProyectoRepository
│  │  │  ├─ ComentarioRepository.ts        ✓ Implementa IComentariosRepository
│  │  │  └─ LikesRepository.ts             ✓ Implementa ILikesRepository
│  │  │
│  │  └─ services/
│  │     ├─ PasswordHasher.ts              ✓ Encriptación de contraseñas
│  │     ├─ (Servicios de autenticación)
│  │     └─ (Servicios externos)
│  │
│  ├─ presentation/                        ← 🎯 Depende de todas
│  │  ├─ controllers/
│  │  │  ├─ AuthController.ts              ✓ Maneja autenticación
│  │  │  ├─ UsuarioController.ts           ✓ Maneja peticiones de usuarios
│  │  │  ├─ ProyectoController.ts          ✓ Maneja peticiones de proyectos
│  │  │  ├─ ComentarioController.ts        ✓ Maneja peticiones de comentarios
│  │  │  └─ LikesController.ts             ✓ Maneja peticiones de likes
│  │  │
│  │  ├─ routes/
│  │  │  ├─ auth.routes.ts                 ✓ Rutas de autenticación
│  │  │  ├─ usuario.routes.ts              ✓ Rutas de usuarios
│  │  │  ├─ proyecto.routes.ts             ✓ Rutas de proyectos
│  │  │  ├─ comentario.routes.ts           ✓ Rutas de comentarios
│  │  │  ├─ likes.routes.ts                ✓ Rutas de likes
│  │  │  └─ archivoProyecto.routes.ts      ✓ Rutas de archivos de proyecto
│  │  │
│  │  ├─ DTO/
│  │  │  ├─ UsuariosDto/
│  │  │  │  ├─ CrearUsuarioDTO.ts          ✓ Entrada del cliente
│  │  │  │  └─ UsuarioResponseDTO.ts       ✓ Salida al cliente (sin contraseña)
│  │  │  │
│  │  │  ├─ ProyectoDto/
│  │  │  │  ├─ CrearProyectoDTO.ts         ✓ Entrada para crear proyecto
│  │  │  │  └─ ProyectoResponseDTO.ts      ✓ Salida al cliente (respuesta de proyecto)
│  │  │  │
│  │  │  ├─ ComentarioDto/
│  │  │  │  ├─ CrearComentarioDTO.ts       ✓ Entrada para crear comentario
│  │  │  │  └─ ComentarioResponseDTO.ts    ✓ Salida al cliente (respuesta de comentario)
│  │  │  │
│  │  │  ├─ LikeDto/
│  │  │  │  ├─ CrearLikeDTO.ts             ✓ Entrada para crear like
│  │  │  │  └─ LikeResponseDTO.ts          ✓ Salida al cliente (respuesta de like)
│  │  │  │
│  │  │  └─ ArchivoProyectoDto/
│  │  │     ├─ CrearArchivoProyectoDTO.ts  ✓ Entrada para crear archivo
│  │  │     └─ ArchivoProyectoResponseDTO.ts ✓ Salida al cliente (respuesta de archivo)
│  │  │
│  │  ├─ Mappers/
│  │  │  ├─ UsuarioMapper.ts               ✓ Transforma Usuario → DTO
│  │  │  ├─ ProyectoMapper.ts              ✓ Transforma Proyecto → DTO
│  │  │  ├─ ComentarioMapper.ts            ✓ Transforma Comentarios → DTO
│  │  │  ├─ LikeMapper.ts                  ✓ Transforma Likes → DTO
│  │  │  └─ ArchivoProyectoMapper.ts       ✓ Transforma Archivo_Proyecto → DTO
│  │  │
│  │  └─ middlewares/
│  │     └─ auth.middleware.ts             ✓ Middleware de autenticación JWT
│  │
│  ├─ types/
│  │  └─ express/
│  │     └─ index.d.ts                     ✓ Declaraciones de tipos para Express
│  │
│  └─ server.ts                            ← 🚀 Punto de entrada (Express app)
│
├─ uploads/                                 📁 Almacenamiento de archivos
├─ package.json
├─ tsconfig.json
├─ .env
└─ README.md
```

**Leyenda:**
- ✓ = Implementado
- ⏳ = En desarrollo
- 🏛️ = Capa de Dominio (Core)
- 📋 = Capa de Aplicación
- 🔧 = Capa de Infraestructura
- 🎯 = Capa de Presentación
```

------------------------------------------------------------------------

## 🔗 Relaciones entre capas (Flujo de datos)

### **📊 Diagrama de flujo de una solicitud (Ej: Crear Usuario)**

```
CLIENT REQUEST (POST /api/usuarios)
    ↓
[PRESENTATION LAYER]
    ├─ server.ts → Importa rutas
    ├─ usuario.routes.ts → Define ruta POST
    └─ UsuarioController → Importa UseCases y UsuarioMapper
    ↓
[APPLICATION LAYER]
    └─ CUCrearUsuario → Importa:
        ├─ IUsuarioRepository (interface del domain)
        ├─ Usuario (entity del domain)
        ├─ Email, Password, Rol, Telefono (valueObjects)
        └─ CrearUsuarioInput (DTO)
    ↓
[INFRASTRUCTURE LAYER]
    └─ UsuarioRepository → Implementa IUsuarioRepository
        ├─ Importa Usuario (entity)
        └─ Guarda en "base de datos" (simulada o real)
    ↓
[DOMAIN LAYER]
    ├─ Usuario.ts → Define estructura de la entidad
    ├─ IUsuarioRepository.ts → Define contrato para repositorio
    └─ ValueObjects (Email, Password, Rol, Telefono) → Lógica de validación
    ↓
RESPONSE (UsuarioMapper transforma Usuario a JSON)
    └─ UsuarioMapper.toResponse() → Formatea datos para el cliente
```

### **📍 Detalle de importaciones por módulo**

#### **1️⃣ server.ts (Punto de entrada)**
```typescript
import express from "express";
import cors from "cors";
import usuarioRoutes from "./presentation/routes/usuario.routes";
// ↓ Solo importa las rutas de presentation
```

#### **2️⃣ usuario.routes.ts (Definición de rutas)**
```typescript
import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
// ↓ Importa Controller de presentation
```

#### **3️⃣ UsuarioController.ts (Controlador HTTP)**
```typescript
import { CUCrearUsuario } from "../../application/UseCases/UsuarioUseCase/CrearUsuario";
import { CUListarUsuarios } from "../../application/UseCases/UsuarioUseCase/ListarUsuarios";
import { usuarioRepository } from "../../infrastructure/repositories/UsuarioRepository";
import { UsuarioMapper } from "../Mappers/UsuarioMapper";
// ↓ Orquesta UseCases, repositorio e instancia del mapper
```

#### **4️⃣ CUCrearUsuario.ts (Caso de uso - Create)**
```typescript
import { IUsuarioRepository } from "../../../domain/interfaces/IUsuarioRepository";
import { Usuario } from "../../../domain/entities/Usuario";
import { Email } from "../../../domain/valueObjects/Email";
import { Password } from "../../../domain/valueObjects/Password";
import { Rol, Roles } from "../../../domain/valueObjects/Rol";
import { Telefono } from "../../../domain/valueObjects/Telefono";
import { CrearUsuarioInput } from "./CrearUsuarioInput";
// ↓ Depende de domain (interface, entities, valueObjects)
// ↓ Inyección de dependencias: recibe IUsuarioRepository en constructor
```

#### **5️⃣ CUListarUsuarios.ts (Caso de uso - List)**
```typescript
import { Usuario } from "../../../domain/entities/Usuario";
import { UsuarioRepository } from "../../../infrastructure/repositories/UsuarioRepository";
// ↓ Importa la implementación concreta del repositorio (debería ser interface)
```

#### **6️⃣ UsuarioRepository.ts (Implementación del repositorio)**
```typescript
import { Usuario } from "../../domain/entities/Usuario";
import { IUsuarioRepository } from "../../domain/interfaces/IUsuarioRepository";

export class UsuarioRepository implements IUsuarioRepository {
  // ↓ Implementa la interfaz del domain
  // ↓ Usa las entidades del domain
  // ↓ Conexión a BD (PostgreSQL/ORM va aquí)
}
```

#### **7️⃣ Usuario.ts (Entidad del dominio)**
```typescript
import { Email } from "../valueObjects/Email";
import { Password } from "../valueObjects/Password";
import { Rol } from "../valueObjects/Rol";
import { Telefono } from "../valueObjects/Telefono";
// ↓ Usa ValueObjects para sus atributos
// ↓ No importa nada de otras capas
```

#### **8️⃣ UsuarioMapper.ts (Transformador de datos)**
```typescript
import { Usuario } from "../../domain/entities/Usuario";
// ↓ Transforma Entity del domain a DTO para respuesta HTTP
static toResponse(usuario: Usuario) {
  return {
    id_usuario: usuario.id_usuario,
    correo: usuario.correo.getValue(),
    // ... otros campos transformados
  };
}
```

### **🎯 Reglas de dependencia (Importaciones permitidas)**

| Capa | Puede importar de | NO puede importar de |
|------|------------------|----------------------|
| **Domain** | (Nada - es independiente) | Application, Infrastructure, Presentation |
| **Application** | Domain | Infrastructure (excepto interfaces), Presentation |
| **Infrastructure** | Domain, Application | Presentation |
| **Presentation** | Application, Domain, Infrastructure | (Nada más) |

### **✅ Patrones aplicados**

1. **Inyección de Dependencias**: CUCrearUsuario recibe `IUsuarioRepository` en constructor
2. **Interfaces**: Los UseCase dependen de `IUsuarioRepository`, no de la implementación
3. **Mappers**: Transforman entidades del domain en DTOs para respuestas HTTP
4. **ValueObjects**: Email, Password, Rol, Telefono encapsulan lógica de validación
5. **Separación de responsabilidades**: Cada capa tiene un propósito único y bien definido

------------------------------------------------------------------------

## 🗄️ Base de datos

El backend usa **PostgreSQL** con las siguientes tablas del sistema:

-   usuarios\
-   proyectos\
-   transacciones\
-   proveedores\
-   comentarios\
-   likes\
-   archivos_proyecto

------------------------------------------------------------------------

## 📦 Dependencias principales

-   express\
-   cors\
-   dotenv\
-   bcrypt\
-   jsonwebtoken\
-   pg\
-   pg-hstore\
-   multer

------------------------------------------------------------------------

## 🛠 Dependencias de desarrollo (TypeScript)

-   typescript
-   ts-node-dev
-   @types/node
-   @types/express
-   @types/cors
-   @types/bcrypt
-   @types/jsonwebtoken
-   @types/multer

------------------------------------------------------------------------

## 🔧 Instalación paso a paso

``` bash
npm init -y
npm install express cors dotenv bcrypt jsonwebtoken pg pg-hstore multer
npm install -D typescript ts-node-dev @types/node @types/express @types/cors @types/bcrypt @types/jsonwebtoken @types/multer
npx tsc --init

-- dependecias para el JWT
npm install jsonwebtoken
npm install -D @types/jsonwebtoken
```

------------------------------------------------------------------------

## 📋 Roadmap - Pendientes por implementar

### **Fase 1: Seguridad y Autenticación** 🔐

| Tarea | Descripción | Prioridad | Estado |
|-------|-------------|-----------|--------|
| **1️⃣ Usar req.user en controladores** | Implementar lectura de `req.user.id` y `req.user.rol` en peticiones autenticadas | 🔴 Alta | ⏳ |
| **2️⃣ Middleware de ROLES** | Crear `roleMiddleware` para restringir rutas por rol (ADMIN/CLIENTE) | 🔴 Alta | ⏳ |
| **3️⃣ Control de acceso** | Un CLIENTE solo ve sus datos, ADMIN ve todos | 🔴 Alta | ⏳ |
| **4️⃣ Refresh Token** | Implementar accessToken (15m) y refreshToken (7d) | 🟡 Media | ⏳ |
| **5️⃣ Logout / Token Blacklist** | Invalidar JWT al logout o implementar blacklist | 🟡 Media | ⏳ |

### **Fase 2: Manejo de errores** ⚠️

| Tarea | Descripción | Prioridad | Estado |
|-------|-------------|-----------|--------|
| **6️⃣ Middleware global de errores** | Centralizar manejo de excepciones | 🔴 Alta | ⏳ |
| **7️⃣ Respuestas consistentes** | Estandarizar formato de respuestas HTTP | 🔴 Alta | ⏳ |
| **8️⃣ Validación de entrada** | Validar DTOs con librerías como `class-validator` | 🟡 Media | ⏳ |

### **Fase 3: Proyectos y Características** 📦

| Tarea | Descripción | Prioridad | Estado |
|-------|-------------|-----------|--------|
| **9️⃣ UseCases de Proyecto** | Implementar CRUD completo de proyectos | 🟡 Media | ✓ |
| **🔟 UseCases de Comentarios** | Implementar CRUD completo de comentarios | 🟡 Media | ✓ |
| **1️⃣0️⃣ UseCases de Likes** | Implementar toggle, conteo y verificación de likes | 🟡 Media | ✓ |
| **1️⃣1️⃣ Repositorios principales** | ProyectoRepository, ComentarioRepository, LikesRepository | 🟡 Media | ✓ |
| **1️⃣2️⃣ Controladores** | ProyectoController, ComentarioController, LikesController | 🟡 Media | ✓ |
| **1️⃣3️⃣ Rutas** | proyecto.routes, comentario.routes | 🟡 Media | ✓ |
| **1️⃣4️⃣ Carga de archivos** | Integrar Multer y guardar en `/uploads` | 🟡 Media | ⏳ |
| **1️⃣5️⃣ Transacciones** | Implementar sistema de transacciones | 🟢 Baja | ⏳ |
| **1️⃣6️⃣ Proveedores** | Implementar CRUD para proveedores | 🟢 Baja | ⏳ |

### **Fase 4: Testing y Deployment** 🚀

| Tarea | Descripción | Prioridad | Estado |
|-------|-------------|-----------|--------|
| **1️⃣7️⃣ Tests unitarios** | Tests para UseCases y ValueObjects | 🟡 Media | ⏳ |
| **1️⃣8️⃣ Tests de integración** | Tests para repositorios y controladores | 🟡 Media | ⏳ |
| **1️⃣9️⃣ Variables de entorno** | Configurar `.env` para desarrollo y producción | 🔴 Alta | ⏳ |
| **2️⃣0️⃣ Docker** | Crear Dockerfile y docker-compose | 🟢 Baja | ⏳ |

**Leyenda:**
- 🔴 = Prioridad Alta (blockeador)
- 🟡 = Prioridad Media
- 🟢 = Prioridad Baja (nice-to-have)
- ✓ = Completado
- ⏳ = En progreso



tareas pendientes 



