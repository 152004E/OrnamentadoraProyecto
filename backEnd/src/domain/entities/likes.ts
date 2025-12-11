export class Likes {
    constructor(
        public id_like: number | null,
        public id_proyecto: number,
        public id_usuario: number,
        public fecha_like: Date
    ){}
}