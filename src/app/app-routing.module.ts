import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

//import { AUTH_ROUTES } from './modulos/auth/auth-routing.module';
import { ValidarAutenticacion } from './genericos/guards/validar-autenticacion.guard';


const routes: Routes = [
 /* {
    path: 'pages',
    loadChildren: () => import('app/pages/pages.module')
      .then(m => m.PagesModule),
      canActivate: [ValidarAutenticacion] 
  },*/
  {
    path: 'modulos',
    loadChildren: () => import('app/modulos/modulos.module')
      .then(m => m.ModulosModule), 
      canActivate: [ValidarAutenticacion] 
  },
  {
    path: 'auth',
    loadChildren: () => import('app/modulos/auth/auth.module')
      .then(m => m.AuthModule),
  },
  { path: '', redirectTo: 'modulos', pathMatch: 'full' },
  { path: '**', redirectTo: 'modulos' },
 
  // {
  //   path: 'auth',
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'login',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: NbRegisterComponent,
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       component: NbResetPasswordComponent,
  //     },
  //   ],
  // },
  // { path: '', redirectTo: 'pages', pathMatch: 'full' },
  // { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
