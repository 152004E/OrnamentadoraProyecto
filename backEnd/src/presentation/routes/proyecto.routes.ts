import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { ProyectoController } from "../controllers/ProyectoController";

const router = Router();

const controller = new ProyectoController();

router.use(authMiddleware); //todo lo de abajo protegido

router.post("/", controller.crear);
router.get("/", controller.listar);
router.get("/:id", controller.buscarPorid);
router.put("/:id", controller.actualizar);
router.delete("/:id", controller.eliminar);

export default router;
