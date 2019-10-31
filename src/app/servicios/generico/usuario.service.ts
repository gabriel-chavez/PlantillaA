import { Injectable } from '@angular/core';
import { Usuario } from '../../modelos/genericos/usuario.model';
import { Observable } from 'rxjs';
import { Token } from '../../modelos/genericos/token.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AlertaService } from './alerta.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private alerta: AlertaService) { }
  private datosUsuario: Usuario;
  obtenerDatosUsuario() {
    const helper = new JwtHelperService();
    if (sessionStorage.getItem('tokenUsuario')) {
      let token: Token = JSON.parse(sessionStorage.getItem('tokenUsuario'));
      this.datosUsuario = helper.decodeToken(token.TokenAcceso);
      return Observable.of(this.datosUsuario)
    }
    else {
      this.alerta.error("No se tiene el token");
    }
  }
}