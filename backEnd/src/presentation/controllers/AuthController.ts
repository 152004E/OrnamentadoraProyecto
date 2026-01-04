import { Request, Response } from "express";
import { CUAutenticarUsuario } from "../../application/UseCases/UsuarioUseCase/AutenticarUsuario";
import { usuarioRepository } from "../../infrastructure/repositories/UsuarioRepository";
import { UsuarioMapper } from "../Mappers/UsuarioMapper";

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { correo, contraseña } = req.body;
      const usecase = new CUAutenticarUsuario(usuarioRepository);
      const usuario = await usecase.execute(correo, contraseña);

      return res.status(200).json({
        message: "login exitoso",
        usuario: UsuarioMapper.toResponse(usuario),
      });
    } catch (error: any) {
      return res.status(401).json({
        message: error.message,
      });
    }
  }
}
