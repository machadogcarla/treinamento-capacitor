import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DistribuidorRoutingModule } from './distribuidor-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    DistribuidorRoutingModule
  ]
})
export class DistribuidorModule { }
