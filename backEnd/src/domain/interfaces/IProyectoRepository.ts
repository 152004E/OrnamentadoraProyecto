import { Proyecto } from "../entities/Proyecto";

export interface IProyectoRepository {
    crear(Proyecto: Proyecto): Promise <Proyecto>;
    buscarPorId(id: number): Promise <Proyecto | null>;
    listar(): Promise <Proyecto[]>;
    actualizar(id: number, data: Partial<Proyecto>): Promise <Proyecto>;
    eliminar(id: number): Promise <void>;
}