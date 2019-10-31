import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NebularModule } from '../../nebular.module';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { VariosModule } from '../varios/varios.module';


@NgModule({
    imports: [
        AuthRoutingModule,
        NebularModule,
        FormsModule,
        ReactiveFormsModule,
        VariosModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        CambiarContrasenaComponent,
        

    ],

})
export class AuthModule { }