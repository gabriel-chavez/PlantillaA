import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoComponent } from './nuevo/nuevo.component';
import { RealizadosComponent } from './realizados/realizados.component';
import { RcvSoatComponent } from './rcv-soat.component';

const routes: Routes = [
  {
    path: '',
    component:RcvSoatComponent,
    children: [{
      path: 'nuevo',
      component: NuevoComponent
    },
    {
      path:'realizados',
      component:RealizadosComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RcvSoatRoutingModule { }
