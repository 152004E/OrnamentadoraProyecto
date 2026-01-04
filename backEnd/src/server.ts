import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuarioRoutes from "./presentation/routes/usuario.routes";
import authRoutes from "./presentation/routes/auth.routes";


// configuracion para el JWT
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//rutas

app.use("/api", usuarioRoutes);
app.use("/api", authRoutes )

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
