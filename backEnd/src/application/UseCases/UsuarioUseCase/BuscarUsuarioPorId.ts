import { Usuario } from "../../../domain/entities/Usuario";
import { IUsuarioRepository } from "../../../domain/interfaces/IUsuarioRepository";

export class CUBuscarPorId {
  constructor(private readonly usuarioRepository: IUsuarioRepository) {}

  async execute(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.buscarPorId(id);

    if(!usuario){
        throw new Error("Usuario no encontrado")
    }
    return usuario
  }
}
