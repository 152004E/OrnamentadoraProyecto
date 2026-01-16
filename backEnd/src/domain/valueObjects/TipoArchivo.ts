export type TipoArchivoType = "IMAGEN" | "VIDEO";

export class TipoArchivo {
  private constructor(public readonly value: TipoArchivoType) {}

  static imagen(): TipoArchivo {
    return new TipoArchivo("IMAGEN");
  }
  static video(): TipoArchivo {
    return new TipoArchivo("VIDEO");
  }
  static fromString(value: string): TipoArchivo {
    if (value !== "IMAGEN" && value !== "VIDEO") {
      throw new Error("Tipo de archivo no permitido");
    }
    return new TipoArchivo(value);
  }
}
