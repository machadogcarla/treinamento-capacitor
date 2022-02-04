import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { DistribuidorComponent } from './pages/distribuidor/distribuidor.component';
import { MobileComponent } from './layout/mobile/mobile.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './shared/services/auth-interceptor';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { AppConfigModule } from './app-config.module';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    DistribuidorComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    AppConfigModule
  ],
  providers: [
    httpInterceptorProviders,
    HTTP
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
