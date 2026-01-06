import { Proyecto } from "../entities/Proyecto";

export interface IProyectoRepository {
  crear(Proyecto: Proyecto): Promise<Proyecto>;
  listar(): Promise<Proyecto[]>;
  buscarPorId(id: number): Promise<Proyecto | null>;
  actualizar(id: number, data: Partial<Proyecto>): Promise<Proyecto>;
  eliminar(id: number): Promise<void>;
}
