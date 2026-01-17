export interface AuthResponseDTO {
  token: string;
  user: {
    id: number;
    nombre: string;
    rol: string;
  };
}