import { DefaultResponse } from '.';

export interface DistribuidorResponse extends DefaultResponse {
  dados: Distribuidor[];
}

export interface Distribuidor {
  id_distribuidor: number;
  razao_social: string;
  nome_fantasia: string;
  cor_a: string;
  cor_b: string;
  cor_c: string;
  imagem: string[] | [];
}
