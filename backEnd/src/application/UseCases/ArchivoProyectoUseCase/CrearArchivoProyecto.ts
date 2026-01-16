import { Archivo_Proyecto } from "../../../domain/entities/Archivo_Proyecto";
import { IArchivo_ProyectoRepository } from "../../../domain/interfaces/IArchivo_ProyectoRepository";
import { IProyectoRepository } from "../../../domain/interfaces/IProyectoRepository";
import { ArchivoCotenido } from "../../../domain/valueObjects/ArchivoContenido";
import { TipoArchivo } from "../../../domain/valueObjects/TipoArchivo";
import { CrearArchivoProyectoInput } from "./CrearArchivoProyectoInput";

export class CUCrearArchivoProyecto {
  constructor(
    private archivoRepository: IArchivo_ProyectoRepository,
    private proyectoRepository: IProyectoRepository
  ) {}
  async execute(input: CrearArchivoProyectoInput): Promise<Archivo_Proyecto> {
    // se valida que el proyecto exista
    const proyecto = await this.proyectoRepository.buscarPorId(
      input.id_proyecto
    );
    if (!proyecto) {
      throw new Error("Proyecto no encontrado");
    }
    // crear el vo

    const tipoArchivo = TipoArchivo.fromString(input.tipo_archivo);
    const contenido = ArchivoCotenido.crear(
      input.url,
      input.mimeType,
      input.size
    );
    // se crea la entidad

    const archivo = new Archivo_Proyecto(
      null,
      input.id_proyecto,
      input.id_usuario,
      contenido,
      tipoArchivo,
      new Date()
    );
    return await this.archivoRepository.create(archivo);
  }
}
