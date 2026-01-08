import { Comentarios } from "../entities/Comentarios";

export interface IComentariosRepository {
  create(comentario: Comentarios): Promise<Comentarios>;
  findById(id_comentario: number): Promise<Comentarios | null>;
  findByProyecto(id_proyecto: number): Promise<Comentarios[]>;
  findByFechaComentario(fecha_comentario: Date): Promise<Comentarios[]>;
  actualizarComentario(id_comentario: number, contenido: string ): Promise<Comentarios>;
  delete(id_comentario: number): Promise<void>;

  //Los deje comentados por si se necesitan en el futuro
  //findByUsuario(id_usuario: number): Promise<Comentarios[]>;
  //findByContenido(contenido: string): Promise<Comentarios[]>;
  //findByEstado(estado: boolean): Promise<Comentarios[]>;
}
