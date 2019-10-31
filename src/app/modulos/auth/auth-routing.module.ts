import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { ValidarAutenticacion } from '../../genericos/guards/validar-autenticacion.guard';




const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [{
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'cambiar-contrasena',
      component: CambiarContrasenaComponent,
      canActivate: [ValidarAutenticacion] 
    },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
