import { IUsuarioRepository } from "../../../domain/interfaces/IUsuarioRepository";
export class CUEliminarUsuario{
    constructor (private usuarioRepository: IUsuarioRepository){}

    async execute(id:number): Promise<void>{
        const usuario = this.usuarioRepository.buscarPorId(id)
        if(!usuario){
            throw new Error("Usuario no encontrado")
        }
        await this.usuarioRepository.eliminar(id)
    }

}