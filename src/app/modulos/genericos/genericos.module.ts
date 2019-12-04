import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericosRoutingModule } from './genericos-routing.module';
import { BusquedaVehiculoComponent } from './busqueda-vehiculo/busqueda-vehiculo.component';
import { NebularModule } from '../../nebular.module';
import { UvComponentsModule } from '../../genericos/uv-componentes/uv-components.module';
//import { VariosModule } from '../varios/varios.module';




@NgModule({
  declarations: [BusquedaVehiculoComponent],
  imports: [
    CommonModule,
    GenericosRoutingModule,
    NebularModule,
  //  VariosModule
  UvComponentsModule
  ],
  exports:[BusquedaVehiculoComponent],
 
})
export class GenericosModule { }
