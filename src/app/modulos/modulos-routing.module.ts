import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from './modulos.component';
import { NoEncontradoComponent } from './varios/no-encontrado/no-encontrado.component';
const routes: Routes = [{
  path: '',
  component: ModulosComponent,
  children: [   
    {
      path: 'proveedores',
      loadChildren: () => import('./proveedores/proveedores.module')
        .then(m => m.ProveedoresModule),
    },
    {
      path: '**',
      component: NoEncontradoComponent,
    },
  ],
}];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulosRoutingModule { }
