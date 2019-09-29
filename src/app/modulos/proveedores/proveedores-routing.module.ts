import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedoresComponent } from './proveedores.component';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';


const routes: Routes = [
  {
    path: '',
    component: ProveedoresComponent,
    children: [{
      path: 'nuevo',
      component: NuevoComponent
    },
    {
      path: 'lista',
      component: ListaComponent
    }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
