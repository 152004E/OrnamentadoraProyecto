import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";
import { ArchivoProyectoController } from "../controllers/ArchivoProyectoController";

const router = Router();
const controllerArchivos = new ArchivoProyectoController();

// Todo protegido
router.use(authMiddleware);

// Subir archivo a un proyecto
router.post("/proyectos/:id/archivos",adminMiddleware, controllerArchivos.crear);
router.get("/archivos/:id_archivo", controllerArchivos.buscarPorId);

// Listar archivos de un proyecto
router.get("/proyectos/:id/archivos", controllerArchivos.buscarPorProyecto);

// Eliminar archivo (cuando lo hagas)
router.delete("/archivos/:id_archivo",adminMiddleware, controllerArchivos.eliminarArchivo);

export default router;
