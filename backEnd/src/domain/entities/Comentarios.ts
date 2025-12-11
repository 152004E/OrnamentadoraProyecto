export class Comentarios {
    constructor(
        public id_comentario: number | null,
        public id_proyecto: number,
        public id_usuario: number,
        public contenido: string,
        public fecha_comentario: Date,
        public estado: boolean
    ){}
}