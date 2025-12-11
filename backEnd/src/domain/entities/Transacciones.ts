export class Transacciones {
    constructor(
        public id_transaccion: number | null,
        public id_proyecto: number,
        public id_proveedor: number,
        public tipo_transaccion: string,
        public categoria: string,
        public monto: number,
        public fecha_transaccion: Date,
        public descripcion: string
    ){}
}