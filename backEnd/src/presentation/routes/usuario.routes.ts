import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";

const router = Router();
const usuarioController = new UsuarioController();

router.post("/usuarios" , (req, res) =>{
    usuarioController.crear(req, res)
})

export default router;