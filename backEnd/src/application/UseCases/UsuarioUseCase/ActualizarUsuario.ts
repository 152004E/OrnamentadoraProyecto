import { Usuario } from "../../../domain/entities/Usuario";
import { IUsuarioRepository } from "../../../domain/interfaces/IUsuarioRepository";
import { ActualizarUsuarioInput } from "./ActualizarUsuarioInput";

export class CUActualizarUsuario {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async execute(id: number, data: ActualizarUsuarioInput): Promise<Usuario> {
    const existe = await this.usuarioRepository.buscarPorId(id);

    if (!existe) {
      throw new Error("Usuario no encontrado");
    }

    return this.usuarioRepository.actualizar(id, data);
  }
}