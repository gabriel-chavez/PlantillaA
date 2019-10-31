import { NgModule } from '@angular/core';
import { VariosRoutingModule } from './varios-routing.module';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { VariosComponent } from './varios.component';

import { NebularModule } from '../../nebular.module';
import { NbCardModule, NbPopoverModule, NbSearchModule, NbIconModule, NbAlertModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FrmValidacionComponent } from './frm-validacion/frm-validacion.component';



@NgModule({
    imports: [
        VariosRoutingModule,
        NebularModule,        
    ],
    declarations: [
        VariosComponent,
        NoEncontradoComponent,
        FrmValidacionComponent
    ],
    exports:[FrmValidacionComponent],
})
export class VariosModule { }
