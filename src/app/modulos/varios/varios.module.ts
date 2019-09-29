import { NgModule } from '@angular/core';
import { VariosRoutingModule } from './varios-routing.module';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { VariosComponent } from './varios.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbButtonModule } from '@nebular/theme';


@NgModule({

    imports: [
        ThemeModule,
        NbCardModule,
        NbButtonModule,
        VariosRoutingModule
    ],
    declarations: [
        VariosComponent, 
        NoEncontradoComponent
    ]
})
export class VariosModule { }
