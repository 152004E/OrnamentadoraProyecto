import { Request, Response } from "express";
import { CUAutenticarUsuario } from "../../application/UseCases/UsuarioUseCase/AutenticarUsuario";
import { usuarioRepository } from "../../infrastructure/repositories/UsuarioRepository";
import jwt, { SignOptions } from "jsonwebtoken";
import { AuthMapper } from "../Mappers/AuthMapper";

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { correo, contraseña } = req.body;
      const usecase = new CUAutenticarUsuario(usuarioRepository);
      const usuario = await usecase.execute(correo, contraseña);

      const JWT_SECRET = process.env.JWT_SECRET!;
      const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN!;


      const options: SignOptions = {
        expiresIn: JWT_EXPIRES_IN as SignOptions["expiresIn"]
      }

      const token = jwt.sign(
        {
          id: usuario.id_usuario,
          rol: usuario.rol.getValue(), // o usuario rol segun la entidad
        },
        JWT_SECRET, options
      );
      
      return res.status(200).json(AuthMapper.toResponse(usuario,token));
    } catch (error: any) {
      return res.status(401).json({
        message: error.message,
      });
    }
  }
}
