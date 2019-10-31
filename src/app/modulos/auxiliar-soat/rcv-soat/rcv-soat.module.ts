import { NgModule } from '@angular/core';


import { RcvSoatRoutingModule } from './rcv-soat-routing.module';
import { RcvSoatComponent } from './rcv-soat.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { RealizadosComponent } from './realizados/realizados.component';

@NgModule({
  declarations: [
    RcvSoatComponent, 
    NuevoComponent, 
    RealizadosComponent,    
  ],
  imports: [
    RcvSoatRoutingModule,    
  ]
})
export class RcvSoatModule { }
