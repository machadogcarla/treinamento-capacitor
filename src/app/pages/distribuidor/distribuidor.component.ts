import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { Distribuidor } from 'src/app/shared/interface';
import { DistribuidorService } from 'src/app/shared/services/distribuidor.service';

@Component({
  selector: 'app-distribuidor',
  templateUrl: './distribuidor.component.html',
  styleUrls: ['./distribuidor.component.scss']
})
export class DistribuidorComponent implements OnInit {

  private distribuidorSub!: Subscription;

  constructor(private distribuidorService: DistribuidorService,
    private router: Router ) { }

  ngOnInit(): void {
    this.buscarDistribuidor();
  }

  buscarDistribuidor() :void {
    this.distribuidorService
      .getDistribuidor()
      .pipe(take(1))
      .subscribe(
        (response) => {
          if (response.dados[0])
          //  console.log(response.dados)
          //  this.distribuidorService.distribuidor = response.dados[0];
          this.distribuidorService.distribuidores = response.dados;
          console.log(this.distribuidorService)
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
