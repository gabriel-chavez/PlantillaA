import { NgModule } from '@angular/core';

import { VentaAnexoSoatComponent } from './venta-anexo-soat.component';
import { VentaNuevaComponent } from './venta-nueva/venta-nueva.component';
import { VentasRealizadasComponent } from './ventas-realizadas/ventas-realizadas.component';
import { VentaAnexoSoatRoutingModule } from './venta-anexo-soat-routing.module';
import { GenericosModule } from '../../genericos/genericos.module';
import { NebularModule } from '../../../nebular.module';

@NgModule({
  declarations: [
    VentaAnexoSoatComponent, 
    VentaNuevaComponent, 
    VentasRealizadasComponent
  ],
  imports: [
    VentaAnexoSoatRoutingModule,
    GenericosModule,
    NebularModule
  ]
})
export class VentaAnexoSoatModule { }
