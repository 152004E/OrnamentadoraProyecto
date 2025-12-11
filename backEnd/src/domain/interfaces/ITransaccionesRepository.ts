import { Transacciones } from "../entities/Transacciones";

export interface ITransaccionesRepository {
    create(transaccion: Transacciones): Promise<Transacciones>;
    findById(id_transaccion: number): Promise<Transacciones | null>;
    findByProyecto(id_proyecto: number): Promise<Transacciones[]>;
    delete(id_transaccion: number): Promise<void>;
}   
