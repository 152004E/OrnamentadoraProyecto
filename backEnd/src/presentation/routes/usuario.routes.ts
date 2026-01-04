import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();
const usuarioController = new UsuarioController();

router.post("/usuarios" , usuarioController.crear) // publico 
router.use(authMiddleware); // 👈 desde aquí todo protegido

router.get("/usuarios", usuarioController.listar);
router.get("/usuarios/:id", usuarioController.buscarPorId);
router.put("/usuarios/:id", usuarioController.actualizar);
router.delete("/usuarios/:id", usuarioController.eliminar);

export default router;  