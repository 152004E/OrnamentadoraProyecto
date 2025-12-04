# 🔧 Backend -- Ornamentadora Proyecto

Este es el backend de la plataforma Ornamentadora Proyecto, desarrollado bajo los principios de Clean Architecture, lo que permite una estructura modular, mantenible y escalable.
La lógica de negocio se mantiene completamente separada de frameworks, infraestructura y controladores, garantizando:

Código más limpio y fácil de probar

Independencia entre capas

Facilidad para agregar nuevas funcionalidades

Menor acoplamiento entre módulos

El sistema gestiona toda la lógica de negocio, autenticación, operaciones CRUD, proyectos, transacciones, proveedores, comentarios y carga de archivos, manteniendo una arquitectura robusta y profesional.

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

## 📁 Estructura recomendada del proyecto

    backend/
     ├─ src/
     │  ├─ controllers/
     │  ├─ routes/
     │  ├─ middleware/
     │  ├─ models/
     │  ├─ services/
     │  ├─ config/
     │  └─ server.ts
     ├─ uploads/
     ├─ package.json
     ├─ tsconfig.json
     └─ .env

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
```

------------------------------------------------------------------------


