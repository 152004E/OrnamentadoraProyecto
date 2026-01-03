import { Request, Response } from "express";
import { CUCrearUsuario } from "../../application/UseCases/UsuarioUseCase/CrearUsuario";
import { CUListarUsuarios } from "../../application/UseCases/UsuarioUseCase/ListarUsuarios";
import { UsuarioRepository, usuarioRepository } from "../../infrastructure/repositories/UsuarioRepository";
import { UsuarioMapper } from "../Mappers/UsuarioMapper";
import { CUBuscarPorId } from "../../application/UseCases/UsuarioUseCase/BuscarUsuarioPorId";
import { CUActualizarUsuario } from "../../application/UseCases/UsuarioUseCase/ActualizarUsuario";
export class UsuarioController {
  async crear(req: Request, res: Response) {
    try {
      // la variable del crearUsuario es una constante para que se permita hacer la validadcion de postman sin necesidad de bata base
      const crearUsuario = new CUCrearUsuario(usuarioRepository);

      const usuario = await crearUsuario.execute(req.body);
      return res.status(201).json(UsuarioMapper.toResponse(usuario));
    } catch (error: any) {
      // este any es solo para empezar para que se pueda ver el error, pero en produccion se debe cambiar
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async listar(req: Request, res: Response) {
    try {
      const usecase = new CUListarUsuarios(usuarioRepository);

      const usuarios = await usecase.execute();
      return res.status(200).json(usuarios.map(UsuarioMapper.toResponse));
    } catch (error: any) {
      // este any es solo para empezar para que se pueda ver el error, pero en produccion se debe cambiar
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async buscarPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const usecase = new CUBuscarPorId(usuarioRepository);

      const usuario = await usecase.execute(Number(id));

      return res.status(200).json(UsuarioMapper.toResponse(usuario));
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async actualizar(req: Request , res : Response){
    try {
      const {id} = req.params
      const data = req.body

      const usecase = new CUActualizarUsuario(usuarioRepository)
      const usuario = await usecase.execute(Number(id), data)
      return res.status(200).json(
        UsuarioMapper.toResponse(usuario)
      )
      
    } catch (error : any) {
      res.status(400).json({
        message: error.message
    })
    }
  }
}
