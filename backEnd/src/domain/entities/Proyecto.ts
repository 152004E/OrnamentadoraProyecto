export class Proyecto {
    constructor(
        public id_proyecto: number | null,
        public id_usuario: number,
        public nombre_proyecto: string,
        public descripcion: string,
        public fecha_creacion: Date,
        public fecha_entrega: Date,
        public estado: boolean
    ){}
}