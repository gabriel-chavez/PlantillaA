import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VariosComponent } from './varios.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

const routes: Routes = [
  {
    path: '',
    component: VariosComponent,
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
export class VariosRoutingModule { }
