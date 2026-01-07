import { Proyecto } from "../../../domain/entities/Proyecto";
import { IProyectoRepository } from "../../../domain/interfaces/IProyectoRepository";

export class CUActualizarProyecto{
    constructor (private proyectoRepository : IProyectoRepository){}

    async execute(id: number, data : any): Promise<Proyecto>{
        const proyectoExiste = await this.proyectoRepository.buscarPorId(id)
        if(!proyectoExiste){
            throw new Error("Proyecto no encontrado")
        }
        if(data.nombre_proyecto) proyectoExiste.nombre_proyecto = data.nombre_proyecto
        if(data.descripcion) proyectoExiste.descripcion = data.descripcion
        if(data.estado) proyectoExiste.estado = data.estado

        
        return this.proyectoRepository.actualizar(id,proyectoExiste)
    }
}