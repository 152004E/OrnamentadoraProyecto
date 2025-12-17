import express  from "express";
import cors from "cors";
import usuarioRoutes from "./presentation/routes/usuario.routes";


const app = express();

app.use(cors());
app.use(express.json());


//rutas

app.use("/api", usuarioRoutes)

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})