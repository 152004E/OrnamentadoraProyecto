import { Request, Response } from "express";
import { UsuarioRepository } from "../../infrastructure/repositories/UsuarioRepository";
import { CUCrearUsuario } from "../../application/UseCases/UsuarioUseCase/CrearUsuario";
export class UsuarioController {
  async crear( req: Request, res: Response) {
    try {
      const usuarioRepository = new UsuarioRepository();
      const crearUsuario = new CUCrearUsuario(usuarioRepository);

      const usuario = await crearUsuario.execute(req.body);
      return res.status(201).json(usuario);
    } catch (error: any) {
      // este any es solo para empezar para que se pueda ver el error, pero en produccion se debe cambiar
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
