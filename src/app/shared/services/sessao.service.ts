import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { AppConfig, APP_CONFIG } from 'src/app/app-config.module';
import { Sessao } from '../interface';


import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class SessaoService {
  private _sessao: Sessao;
  private _sessao$: BehaviorSubject<Sessao>;

  loadSessao: Observable<Sessao>;

  constructor(
    private appService: AppService,
    @Inject(APP_CONFIG) private appConfig: AppConfig
  ) {
    this._sessao = {};
    this._sessao$ = new BehaviorSubject<Sessao>({});
    this.loadSessao = this._sessao$.asObservable();
  }

  get sessao(): Sessao {
    return this._sessao;
  }

  set sessao(sessao: Sessao) {
    this._sessao = { ...sessao };
    this._sessao$.next(this._sessao);
  }

  get valida(): boolean | undefined {
    return this.sessao?.valida;
  }

  set valida(valida: boolean | undefined) {
    this.sessao = {
      ...this.sessao,
      valida,
    };
  }

  get platform(): string {
    return this.sessao.navegador || '';
  }

  set platform(navegador: string) {
    this.sessao = {
      ...this.sessao,
      navegador,
    };
  }

  get token(): string | undefined {
    return this.sessao?.token_aparelho;
  }

  set token(token_aparelho: string | undefined) {
    this.sessao = {
      ...this.sessao,
      token_aparelho,
    };
  }

}
