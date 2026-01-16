import { Roles } from "../../../domain/valueObjects/Rol";
import { IComentariosRepository } from "../../../domain/interfaces/IComentariosRepository";

export class CUEliminarComentario {
  constructor(private comentarioRepository: IComentariosRepository) {}

  async execute(
    id_comentario: number,
    id_usuario: number,
    rol_usuario: Roles
  ): Promise<void> {

    const comentario = await this.comentarioRepository.findById(id_comentario);

    if (!comentario) {
      throw new Error("Comentario no encontrado");
    }

    const esDueno = comentario.id_usuario === id_usuario;
    const esAdmin = rol_usuario === Roles.ADMIN;

    if (!esDueno && !esAdmin) {
      throw new Error("No tienes permiso para eliminar este comentario");
    }

    await this.comentarioRepository.delete(id_comentario);
  }
}