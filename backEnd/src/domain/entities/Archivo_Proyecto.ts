import { ArchivoCotenido } from "../valueObjects/ArchivoContenido";
import { TipoArchivo } from "../valueObjects/TipoArchivo";

export class Archivo_Proyecto {
    constructor(
        public id_archivo: number | null,
        public id_proyecto: number,
        public id_usuario: number,
        public contenido : ArchivoCotenido,
        public tipo_archivo: TipoArchivo,
        public fecha_subida: Date
    ){}
}