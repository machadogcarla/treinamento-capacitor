import { DefaultResponse, Usuario } from ".";

export interface SessaoInRequest extends Partial<Sessao> {
  token_aparelho?: string;
  modelo_aparelho?: string;
  navegador?: string; //'app' | 'web' | undefined; //'ios' | 'android' | 'web';
  os?: string; // 'ios' | 'android' | 'windows' | 'mac' | 'unknown';
  latitude?: string;
  longitude?: string;
  versao_app?: string; // appBuild
}
export interface SessaoInResponse extends DefaultResponse {
  id?: number;
}

export interface SessaoOutRequest {
  token_aparelho?: string;
  navegador?: string; //'app' | 'web';
}

export interface SessaoOutResponse extends DefaultResponse {}
export interface Sessao {
  usuario?: Usuario;
  valida?: boolean;
  os?: string; //'ios' | 'android' | 'windows' | 'mac' | 'unknown';
  modelo_aparelho?: string;
  navegador?: string; //'app' | 'web' | undefined; // platform: ios | android | web
  latitude?: string;
  longitude?: string;
  token_aparelho?: string; // uuid
  token_firebase?: string; // firebase.instanceId
  versao_app?: string;
}
