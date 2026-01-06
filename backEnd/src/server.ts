import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuarioRoutes from "./presentation/routes/usuario.routes";
import authRoutes from "./presentation/routes/auth.routes";
import proyectoRoutes from "./presentation/routes/proyecto.routes"
import { pool } from "../src/infrastructure/database/postgres";

// configuracion para el JWT
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//rutas

app.use("/api/auth", authRoutes); // login
app.use("/api/usuarios", usuarioRoutes); // usuarios
app.use("/api/proyectos", proyectoRoutes); // Proyectos

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

async function testDb() {
  const { rows } = await pool.query("SELECT NOW()");
  console.log("Conectado a Postgres", rows[0]);
}

testDb();
