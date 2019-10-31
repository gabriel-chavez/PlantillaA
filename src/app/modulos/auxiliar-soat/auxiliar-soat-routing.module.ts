import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuxiliarSoatComponent } from './auxiliar-soat.component';




const routes: Routes = [
  {
    path: '',
    component: AuxiliarSoatComponent,
    children: [{
      path: 'venta-anexo-soat',
      loadChildren: () => import('./venta-anexo-soat/venta-anexo-soat.module')
        .then(m => m.VentaAnexoSoatModule),      
    },
    {
      path: 'rcv-soat',
      loadChildren: () => import('./rcv-soat/rcv-soat.module')
      .then(m => m.RcvSoatModule),
    }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuxiliarSoatRoutingModule { }
