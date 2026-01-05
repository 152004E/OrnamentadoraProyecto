import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();
const usuarioController = new UsuarioController();

router.post("/" , usuarioController.crear) // publico 
router.use(authMiddleware); // 👈 desde aquí todo protegido

router.get("/", usuarioController.listar);
router.get("/:id", usuarioController.buscarPorId);
router.put("/:id", usuarioController.actualizar);
router.delete("/:id", usuarioController.eliminar);

export default router;  