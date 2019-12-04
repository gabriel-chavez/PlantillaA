import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrmValidacionComponent } from './frm-validacion/frm-validacion.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { ButtonCustomComponent, UvDatatableComponent } from './uv-datatable/uv-datatable.component';
import { NebularModule } from '../../nebular.module';



@NgModule({
  imports: [
    CommonModule,    
    NebularModule
  ],
  declarations: [
    FrmValidacionComponent, 
    NoEncontradoComponent,
    ButtonCustomComponent, 
    UvDatatableComponent],
  exports: [FrmValidacionComponent, UvDatatableComponent],
  entryComponents: [ButtonCustomComponent]
})
export class UvComponentsModule { }
