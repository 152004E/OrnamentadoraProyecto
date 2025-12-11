export class Archivo_Proyecto {
    constructor(
        public id_archivo: number | null,
        public id_proyecto: number,
        public id_usuario: number,
        public url_archivo: string,
        public tipo_archivo: string,
        public fecha_subida: Date
    ){}
}