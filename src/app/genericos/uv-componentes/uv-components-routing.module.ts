import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

const routes: Routes = [
  {
    path: '',
    component: NoEncontradoComponent,
    children: [
      {
        path: '404',
        component: NoEncontradoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UvComponentsRoutingModule { }
