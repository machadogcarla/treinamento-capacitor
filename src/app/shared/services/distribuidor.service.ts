import { AppConfig, APP_CONFIG } from 'src/app/app-config.module';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Distribuidor, DistribuidorResponse } from '../interface';
import { AppService } from './app.service';
import { SessaoService } from './sessao.service';

@Injectable({
  providedIn: 'root'
})
export class DistribuidorService {
  private _distribuidor!: Distribuidor;
  private _distribuidor$: BehaviorSubject<Distribuidor | undefined>;
  private _distribuidores!: Distribuidor[];
  private _distribuidores$: BehaviorSubject<Distribuidor[]>;

  constructor(
    private appService: AppService,
    private sessaoService: SessaoService,
    @Inject(APP_CONFIG) private appConfig: AppConfig
    ) {
    this._distribuidor$ = new BehaviorSubject<Distribuidor | undefined>(
      undefined
    );
    this._distribuidores$ = new BehaviorSubject<Distribuidor[]>([]);
   }

   set distribuidor(distribuidor: Distribuidor) {
    this._distribuidor = distribuidor;
    this._distribuidor$.next(distribuidor);
  }

   get distribuidor(): Distribuidor {
    return this._distribuidor;
  }

  set distribuidores(distribuidores: Distribuidor[]) {
    this._distribuidores = distribuidores;
    this._distribuidores$.next(distribuidores);
  }

  get distribuidores(): Distribuidor[] {
    return this._distribuidores;
  }


   getDistribuidor(): Observable<DistribuidorResponse> {
    return this.appService.handleGetHttpClientByPlataform<DistribuidorResponse>(
      this.sessaoService.platform,
      `${this.appConfig.api}${this.appConfig.urlDistribuidor}`
    );
  }


  loadDistribuidor(): Observable<Distribuidor | undefined> {
    return this._distribuidor$.asObservable();
  }

  loadDistribuidores(): Observable<Distribuidor[]> {
    return this._distribuidores$.asObservable();
  }
}
