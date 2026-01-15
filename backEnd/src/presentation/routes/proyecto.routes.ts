import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { ProyectoController } from "../controllers/ProyectoController";
import { ComentarioController } from "../controllers/ComentarioController";
import { LikesController } from "../controllers/LikesController";
import { ProyectoRepository } from "../../infrastructure/repositories/ProyectoRepository";

const router = Router();

const controllerProyecto = new ProyectoController();
const controllerComentarios = new ComentarioController();
const controllerLikes = new LikesController();

router.use(authMiddleware); //todo lo de abajo protegido
// proyecto

router.post("/", controllerProyecto.crear);
router.get("/", controllerProyecto.listar);
router.get("/:id", controllerProyecto.buscarPorid);
router.put("/:id", controllerProyecto.actualizar);
router.delete("/:id", controllerProyecto.eliminar);

// comentarios

router.post("/:id/comentarios", controllerComentarios.crear);
router.get("/:id/comentarios", controllerComentarios.ListarPorProyecto);
router.delete(
  "/:id/comentarios/:id_comentario",
  controllerComentarios.eliminar
);
router.put("/:id/comentarios/:id_comentario", controllerComentarios.actualizar);

// likes

// Like / Unlike proyecto
router.post("/:id/likes", controllerLikes.toggleLikeProyecto);

// Like / Unlike comentario
router.post(
  "/:id/comentarios/:id_comentario/likes",
  controllerLikes.toggleLikeComentario
);

// likes con el contardor

// contar likes de proyecto
router.get("/:id/likes/count", controllerLikes.contarLikesProyecto);

// contar likes de comentario

router.get(
  "/:id/comentarios/:id_comentario/likes/count",
  controllerLikes.contarLikesComentarios
);

// likes por usuario

// Saber si el usuario dio like al proyecto
router.get("/:id/likes/has-liked", controllerLikes.hasLikedProyecto);

// Saber si el usuario dio like al comentario
router.get(
  "/:id/comentarios/:id_comentario/likes/has-liked",
  controllerLikes.hasLikedComentario
);



export default router;
