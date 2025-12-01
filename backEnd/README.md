Este frontend se conecta al backend desarrollado con Node.js, Express y PostgreSQL.


---

# ✅ **README – Backend (Node + Express + PostgreSQL)**

```md
# Backend - Ornamentadora Proyecto

Este es el backend de la plataforma **Ornamentadora Proyecto**, encargado de manejar la lógica de negocio, autenticación, operaciones CRUD, gestión de proyectos, transacciones, archivos, proveedores y comentarios.

## 🛠 Tecnologías utilizadas
- Node.js
- Express
- PostgreSQL
- Sequelize / Prisma (elige uno)
- JSON Web Tokens (JWT)
- Bcrypt
- Multer (para subir archivos)

## 🚀 Instalación y ejecución

1. Clonar el repositorio:
```bash
git clone https://github.com/152004E/OrnamentadoraProyecto.git


Entrar a la carpeta del backend:

cd backend


Instalar dependencias:

npm install


Crear archivo .env con:

PORT=4000
DATABASE_URL=postgres://user:password@localhost:5432/ornamentadora
JWT_SECRET=tu_clave_secreta


Ejecutar en modo desarrollo:

npm run dev


Levantar en producción:

npm start

📁 Estructura recomendada del proyecto
backend/
 ├─ src/
 │  ├─ controllers/
 │  ├─ routes/
 │  ├─ middleware/
 │  ├─ models/
 │  ├─ config/
 │  ├─ services/
 │  └─ index.js
 ├─ uploads/
 ├─ package.json
 └─ .env

🗄 Base de datos

El backend usa PostgreSQL con las tablas:

usuarios

proyectos

transacciones

proveedores

comentarios

likes

archivos_proyecto

El modelo relacional está basado en el diagrama entidad-relación del proyecto.