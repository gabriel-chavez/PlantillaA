import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../modelos/genericos/usuario.model';
import { AutenticacionService } from '../../../servicios/Autenticacion/autenticacion.service';


@Component({
  selector: 'ngx-perfil-card',
  templateUrl: './perfil-card.component.html',
  styleUrls: ['./perfil-card.component.scss']
})
export class PerfilCardComponent {
  datosUsuario:Usuario;
  constructor(private autenticacionService:AutenticacionService) { 
     
    this.datosUsuario =autenticacionService.usuarioAutenticado;
  }

 

}
