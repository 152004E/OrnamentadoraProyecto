export interface CrearArchivoProyectoInput {
  id_proyecto: number;
  id_usuario: number;
  url: string;
  mimeType: string;
  size: number;
  tipo_archivo: "IMAGEN" | "VIDEO";
}
