import { NgModule } from '@angular/core';
import { VariosRoutingModule } from './varios-routing.module';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { VariosComponent } from './varios.component';
import { NebularModule } from '../../nebular.module';
import { FrmValidacionComponent } from './frm-validacion/frm-validacion.component';
import { ButtonCustomComponent, UvDatatableComponent } from './uv-datatable/uv-datatable.component';




@NgModule({
    imports: [
        VariosRoutingModule,
        NebularModule,        
    ],
    declarations: [
        VariosComponent,
        NoEncontradoComponent,
        FrmValidacionComponent,
        ButtonCustomComponent, 
        UvDatatableComponent,
    ],
    exports:[FrmValidacionComponent,UvDatatableComponent],
    entryComponents:[ButtonCustomComponent]
})
export class VariosModule { }
