import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, from, Observable, throwError } from 'rxjs';
import { AppConfig, APP_CONFIG } from 'src/app/app-config.module';
import { HTTP, HTTPResponse } from '@awesome-cordova-plugins/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _headers = {
    'Content-Type': 'application/json',
  };

  constructor( private http: HttpClient,
    private httpIonic: HTTP,
    @Inject(APP_CONFIG) private appConfig: AppConfig
    ) { }


  setHeader() {
    this.httpIonic.setHeader('*', 'Header', 'Value');
  }

  handleGetHttpClientByPlataform<Type>(
    platform: string,
    url: string
  ): Observable<Type> {
    if (this.appConfig.fixSSL && platform === 'app') {
      let now = new Date();
      let validate = new Date(this.appConfig.sslValidate);

      if (now < validate) {
        this.httpIonic.setDataSerializer('json');
        return from(
          this.httpIonic
            .get(url, {}, this._headers)
            .then((response: HTTPResponse) => {
              return <Type>JSON.parse(response.data);
            })
        ).pipe(catchError(this.handleError));
      }
    }

    return this.http.get<Type>(url).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse): Observable<never> {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(error);
  }
}
