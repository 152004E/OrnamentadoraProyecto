import { Likes } from "../entities/likes";

export interface ILikesRepository {
    create(like: Likes): Promise<Likes>;
    findById(id_like: number): Promise<Likes | null>;
    findByProyecto(id_proyecto: number): Promise<Likes[]>;
    findByUsuario(id_usuario: number): Promise<Likes[]>;
    delete(id_like: number): Promise<void>;
}