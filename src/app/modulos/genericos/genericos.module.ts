import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericosRoutingModule } from './genericos-routing.module';
import { BusquedaVehiculoComponent, ButtonCustomComponent } from './busqueda-vehiculo/busqueda-vehiculo.component';
import { NebularModule } from '../../nebular.module';

@NgModule({
  declarations: [BusquedaVehiculoComponent,ButtonCustomComponent],
  imports: [
    CommonModule,
    GenericosRoutingModule,
    NebularModule
  ],
  exports:[BusquedaVehiculoComponent],
  entryComponents:[ButtonCustomComponent]
})
export class GenericosModule { }
