export class ArchivoCotenido {
  private static readonly IMAGENES = ["image/jpeg", "image/png", "image/webp"];
  private static readonly VIDEOS = ["video/mp4", "video/webm"];

  private constructor(
    public readonly url: string,
    public readonly mimeType: string,
    public readonly size: number
  ) {}

  static crear(url: string, mimeType: string, size: number): ArchivoCotenido {
    if (!url) {
      throw new Error("La url del archivo es obligatoria");
    }
    if (size <= 0) {
      throw new Error("el tamaño del archivo es inválido");
    }

    const permitido = [
      this.IMAGENES.includes(mimeType) || this.VIDEOS.includes(mimeType),
    ];
    if (!permitido) {
      throw new Error("Tipo de archivo no permitido");
    }

    return new ArchivoCotenido(url, mimeType, size);
  }
}
