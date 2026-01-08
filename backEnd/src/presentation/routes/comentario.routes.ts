import { Router } from "express";
import { ComentarioController } from "../controllers/ComentarioController";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

const controller = new ComentarioController();

router.use(authMiddleware); // de aca hasta abajo es protegido



export default router;
