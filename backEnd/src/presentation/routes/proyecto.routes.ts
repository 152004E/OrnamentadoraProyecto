import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { ProyectoController } from "../controllers/ProyectoController";
import { ComentarioController } from "../controllers/ComentarioController";

const router = Router();

const controllerProyecto = new ProyectoController();
const controllerComentarios = new ComentarioController();

router.use(authMiddleware); //todo lo de abajo protegido

router.post("/", controllerProyecto.crear);
router.get("/", controllerProyecto.listar);
router.get("/:id", controllerProyecto.buscarPorid);
router.put("/:id", controllerProyecto.actualizar);
router.delete("/:id", controllerProyecto.eliminar);

router.post("/:id/comentarios", controllerComentarios.crear);
router.get("/:id/comentarios", controllerComentarios.ListarPorProyecto);
router.delete("/:id/comentarios/:id_comentario", controllerComentarios.eliminar);
router.put("/:id/comentarios/:id_comentario", controllerComentarios.actualizar);

export default router;
