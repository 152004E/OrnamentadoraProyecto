import { Monto } from "../valueObjects/Monto";
import { TipoTransaccion } from "../valueObjects/TipoTransaccion";

export class Transacciones {
    constructor(
        public id_transaccion: number | null,
        public id_proyecto: number,
        public id_proveedor: number,
        public tipo_transaccion: TipoTransaccion,
        public categoria: string,
        public monto: Monto,
        public fecha_transaccion: Date,
        public descripcion: string
    ){}
}