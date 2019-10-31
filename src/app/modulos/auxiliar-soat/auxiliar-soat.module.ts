import { NgModule } from '@angular/core';
import { AuxiliarSoatComponent } from './auxiliar-soat.component';
import { NebularModule } from '../../nebular.module';
import { AuxiliarSoatRoutingModule } from './auxiliar-soat-routing.module';





@NgModule({

  imports: [
    AuxiliarSoatRoutingModule,
    NebularModule,    
  ],
  declarations: [
    AuxiliarSoatComponent, 
  ],
 
})
export class AuxiliarSoatModule { }
