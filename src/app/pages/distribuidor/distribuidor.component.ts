import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { Distribuidor, DistribuidorResponse } from 'src/app/shared/interface';
import { DistribuidorService } from 'src/app/shared/services/distribuidor.service';

@Component({
  selector: 'app-distribuidor',
  templateUrl: './distribuidor.component.html',
  styleUrls: ['./distribuidor.component.scss'],
})
export class DistribuidorComponent implements OnInit {
  private distribuidorSub!: Subscription;
  distribuidores: Distribuidor[];

  constructor(private distribuidorService: DistribuidorService) {
    this.distribuidores = [];
  }

  ngOnInit(): void {
    this.buscarDistribuidor();
  }

  buscarDistribuidor(): void {
    this.distribuidorService
      .getDistribuidor()
      .pipe(take(1))
      .subscribe(
        (response: DistribuidorResponse) => {
          if (response.dados[0]) {
            this.distribuidorService.distribuidores = response.dados;
            this.distribuidores = this.distribuidorService.distribuidores;
          }
          // this.distribuidorService.distribuidor = response.dados[0];
          // this.distribuidorService.distribuidores = response.dados;

          // console.log('1',this.distribuidorService.distribuidor)
          // console.log('2',this.distribuidorService.distribuidores)
        },
        (error) => {
          console.log(
            'ERRO: Houve um erro ao carregar os dados dos distribuidores: ',
            error
          );
        }
      );
  }
}
