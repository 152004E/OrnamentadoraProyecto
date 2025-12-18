import { Usuario } from "../../../domain/entities/Usuario";
import { UsuarioRepository } from "../../../infrastructure/repositories/UsuarioRepository";

export class CUListarUsuarios{
    constructor(private usuarioRepository: UsuarioRepository){}

    async execute(): Promise<Usuario[]>{
        return await this.usuarioRepository.listar();
    }
}