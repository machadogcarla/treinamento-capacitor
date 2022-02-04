import { DistribuidorModule } from './pages/distribuidor/distribuidor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './layout/mobile/mobile.component';
import { RouterModule, Routes } from '@angular/router';
import { DistribuidorComponent } from './pages/distribuidor/distribuidor.component';

const routes: Routes = [
  { path: 'distribuidor',
  loadChildren: () =>
    import('src/app/pages/distribuidor/distribuidor.module')
    .then(m => m.DistribuidorModule)},
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
