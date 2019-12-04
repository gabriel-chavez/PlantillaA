import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from './modulos.component';
import { NoEncontradoComponent } from '../genericos/uv-componentes/no-encontrado/no-encontrado.component';

const routes: Routes = [{
  path: '',
  component: ModulosComponent,
  children: [      
    {
      path: 'auxiliar-soat',
      loadChildren: () => import('./auxiliar-soat/auxiliar-soat.module')
        .then(m => m.AuxiliarSoatModule),
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
