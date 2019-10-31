import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentaAnexoSoatComponent } from './venta-anexo-soat.component';
import { VentaNuevaComponent } from './venta-nueva/venta-nueva.component';
import { VentasRealizadasComponent } from './ventas-realizadas/ventas-realizadas.component';

const routes: Routes = [
  {
    path: '',
    component:VentaAnexoSoatComponent,
    children: [
      {
        path:'venta-nueva',
        component:VentaNuevaComponent,
      },
      {
        path:'ventas-realizadas',
        component:VentasRealizadasComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaAnexoSoatRoutingModule { }