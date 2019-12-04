import { NgModule, ErrorHandler } from '@angular/core';
import { AutenticacionComponent } from './autenticacion.component';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NebularModule } from '../../nebular.module';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { VariosModule } from '../varios/varios.module';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';


@NgModule({
    imports: [
        AutenticacionRoutingModule,
        NebularModule,
        FormsModule,
        ReactiveFormsModule,
        VariosModule
    ],
    declarations: [
        AutenticacionComponent,
        IniciarSesionComponent,
        CambiarContrasenaComponent,
        

    ],
  
})
export class AuthModule { }