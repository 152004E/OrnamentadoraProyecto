import { LikeTarget } from "../valueObjects/LikeTarget";

export class Likes {
    constructor(
        public id_like: number | null,
        public id_usuario: number,
        public target: LikeTarget,
        public fecha_like: Date
    ){}
}