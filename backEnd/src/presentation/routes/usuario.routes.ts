import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";

const router = Router();
const usuarioController = new UsuarioController();

router.post("/usuarios" , usuarioController.crear)
router.get("/usuarios" , usuarioController.listar)
router.get("/usuarios/:id" , usuarioController.buscarPorId)

export default router;  