import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  readonly TOKEN_HEADER_KEY = 'token';
  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJub21lIjoiUGVybWlzc1x1MDBlM28xIiwiaWRfdXN1YXJpbyI6MywiaWRfZGlzdHJpYnVpZG9yIjowLCJkaXN0cmlidWlkb3JfZGVzY3JpY2FvIjoiUk9PVCIsImlkX3BlcmZpbCI6MSwicGVyZmlsX2Rlc2NyaWNhbyI6InJvb3QiLCJpZF9jYXJnbyI6MSwiY2FyZ29fZGVzY3JpY2FvIjoiZGlyZXRvcmlhIiwiZGF0YV9sb2dpbiI6IjIwMjItMDEtMTQgMDg6Mzk6MTQuMTEzIiwiYWx0ZXJhcl9zZW5oYSI6ZmFsc2UsIm1hbnRlcl9sb2dhZG8iOjF9.TZhYiz2PN8TXYrZpRrZmb4qO2Nv0fM6FLafiG3nb5ah-TrWNvBvwluMzdfCivQaQkgaoy5ar-10xy_10hRujxWOMBZj0RsbT_xQ0Ttrnyg8VSXWLK2XbL543KoMqdI9MqPHC9IgjPpWVg0oEAvAifPAqrZcRJTQvchXk5bJcbweeapaoip620lltLjvgUQ4wbhOPaafUBw2R5mkN-oGlFdTaC58dv3XiivN6pvQbv1Ax9qRh3ubNxj-uba3gE4iYmD5QwhAN6XozoqkxAruWcReVmwU1DBREI8cGD1_41ka9dGVE61vQ8gPYAb1dF2Eg287vt28ykoULwCHEP_7QsRttmEugNG8MXNnwiJMHHvRxhq0HXvJn9atiNnqk7ayl6UXB4GJ9eZOVsG_uy09nNUsrHs9zgJD43LiFY8mvh3xXlgCG5yivrQz64hOOAFmc9eKkVxwm74Jj55nzkNWEPoYopPxa68qrV0Ojwm8J0MpapK7v8qoqWRB7a0k0ijTVHge2PBmz67itICxI1kuJGhjlTJD9i182dkZa8onPXjM3f9eZ96RA0p-2sCYsC2cPqf0g7NVN21rpTjio9kQrxri5SYUHYx7MG1PWYzz_W9qpdpn9CTyUshA2vKExZLpBNzCorEXuTa1jEP9QrEaC-yN5vIfD8kQPDJEH82Kb3KM'
    authReq = req.clone({
      headers: req.headers.set(this.TOKEN_HEADER_KEY, authToken),
    });

    return next.handle(authReq);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];

