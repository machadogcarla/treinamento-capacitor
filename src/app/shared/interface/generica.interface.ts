export interface Resposta {
  tipo: string;
  descricao: string;
}

export interface DefaultResponse {
  status: number;
  resposta: Resposta;
}
