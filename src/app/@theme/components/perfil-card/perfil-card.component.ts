import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../modelos/genericos/usuario.model';
import { UsuarioService } from '../../../servicios/generico/usuario.service';

@Component({
  selector: 'ngx-perfil-card',
  templateUrl: './perfil-card.component.html',
  styleUrls: ['./perfil-card.component.scss']
})
export class PerfilCardComponent {
  datosUsuario:Usuario;
  constructor(private usuarioService:UsuarioService) { 
    usuarioService.obtenerDatosUsuario().subscribe((data:Usuario)=>{
      this.datosUsuario=data;
    });    
  }

 

}
