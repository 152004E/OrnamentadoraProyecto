export type LikeTargetType = "PROYECTO" | "COMENTARIOS";

export class LikeTarget {
  constructor(
    public readonly tipo: LikeTargetType,
    public readonly id: number
  ) {}
  static proyecto(id_proyecto: number): LikeTarget {
    return new LikeTarget("PROYECTO", id_proyecto);
  }
  static comentario(id_comentario: number): LikeTarget {
    return new LikeTarget("COMENTARIOS", id_comentario);
  }
}
