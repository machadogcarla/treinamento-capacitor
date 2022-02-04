import { InjectionToken, NgModule } from '@angular/core';
import { appSetting } from './shared/settings/app.setting';
import { environment } from '../environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
  fixSSL: boolean,
  sslValidate: string,
  api: string;
  urlDistribuidor: string;
  urlUsuarioCadastro: string;
  urlUsuarioAlterarSenha: string;
  urlUsuarioEsqueceuSenha: string;
  urlUsuarioLogin: string;
  urlUsuarioLogout: string;
  urlUsuarioProdutosFavoritos: string;
  urlUsuarioProdutosVistos: string;
  urlSessaoIn: string;
  urlSessaoOut: string;
  urlGrupo: string,
  urlProduto: string,
}

export const APP_DI_CONFIG: AppConfig = {
  api: environment.API,
  urlUsuarioCadastro: appSetting.URL_USUARIO_CADASTRO,
  fixSSL: false,
  sslValidate: '',
  urlDistribuidor:  appSetting.URL_DISTRIBUIDOR,
  urlUsuarioAlterarSenha: '',
  urlUsuarioEsqueceuSenha: '',
  urlUsuarioLogin: '',
  urlUsuarioLogout: '',
  urlUsuarioProdutosFavoritos: '',
  urlUsuarioProdutosVistos: '',
  urlSessaoIn: '',
  urlSessaoOut: '',
  urlGrupo: '',
  urlProduto: ''
};

@NgModule({
 providers: [
   {
     provide: APP_CONFIG,
     useValue: APP_DI_CONFIG,
    },
 ]
})
export class AppConfigModule { }
