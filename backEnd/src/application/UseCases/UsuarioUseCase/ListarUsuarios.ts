import { Usuario } from "../../../domain/entities/Usuario";
import { IUsuarioRepository } from "../../../domain/interfaces/IUsuarioRepository";

export class CUListarUsuarios {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async execute(): Promise<Usuario[]> {
    return await this.usuarioRepository.listar();
  }
}
