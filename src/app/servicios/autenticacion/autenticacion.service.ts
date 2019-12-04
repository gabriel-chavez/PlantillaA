import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { RespuestaBase } from '../../modelos/genericos/respuesta-base.model';
import { Token } from '../../modelos/genericos/token.model';
import { Router } from '@angular/router';
import { TokenRefresh } from '../../modelos/genericos/token-refresh.model';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Usuario } from '../../modelos/genericos/usuario.model';
@Injectable({
    providedIn: 'root'
})
export class AutenticacionService {

    private readonly JWT_TOKEN = 'JWT_TOKEN';
    private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
    public usuarioAutenticado: Usuario;
    private apiUrl: string;
    private helper = new JwtHelperService();    

    constructor(private http: HttpClient, private router: Router, private injector: Injector) {
        this.apiUrl = environment.servicioAutenticacionUrl;
        this.obtenerUsuarioAutenticado();
    }
    obtenerUsuarioAutenticado(){        
        if(this.estaConectado()){
            if(!this.usuarioAutenticado){
                this.usuarioAutenticado = this.helper.decodeToken(this.obtenerJwtToken());
            }
        }
    }
    autenticar(nombreUsuario: string, contrasena: string): Observable<RespuestaBase> {
        const credenciales = {
            Usuario: nombreUsuario,
            Contraseña: contrasena,
            CodigoSistema: "000"
        }
        return this.http.post<any>(
            `${this.apiUrl}autenticar`, credenciales)
            .pipe(
                tap(resp => this.autenticarEjecutar(resp))
            );
    }
    cerrarSesion() {
        this.cerrarSesionEjecutar();
        this.router.navigate(['/autenticacion/iniciar-sesion']);
    }
    estaConectado() {
        return !!this.obtenerJwtToken();
    }
    refrescarToken() {                
        const tokenRefresh: TokenRefresh = {
            tokenAcceso: this.obtenerJwtToken(),
            codigoActualizacion: this.obtenerRefreshToken(),
            usuarioAut: this.usuarioAutenticado.empleadoUsuario.split("_")[0],
            codigoSistema: "000"
        }
        return this.http.post<any>(`${this.apiUrl}regenerartoken`,
            tokenRefresh).pipe(tap((respuestaBase: RespuestaBase) => this.refrescarTokenEjecutar(respuestaBase)));
    }
    refrescarTokenEjecutar(respuestaBase: RespuestaBase) {
        if (respuestaBase.exito) {
            let token: Token = JSON.parse(respuestaBase.resultado);
            this.guardarTokens(token);
        }
    }
    obtenerJwtToken() {
        return localStorage.getItem(this.JWT_TOKEN);
    }
    autenticarEjecutar(respuestaBase: RespuestaBase) {
        if (respuestaBase.exito) {
            let token: Token = JSON.parse(respuestaBase.resultado);            
            this.usuarioAutenticado = this.helper.decodeToken(token.TokenAcceso);
            
            this.guardarTokens(token);
        }
    }
    private cerrarSesionEjecutar() {
        this.usuarioAutenticado = null;
        this.eliminarTokens();
    }
    private obtenerRefreshToken() {
        return localStorage.getItem(this.REFRESH_TOKEN);
    }
    private guardarTokens(token: Token) {
        localStorage.setItem(this.JWT_TOKEN, token.TokenAcceso);
        localStorage.setItem(this.REFRESH_TOKEN, token.CodigoActualizacion);
    }
    private eliminarTokens() {
        localStorage.removeItem(this.JWT_TOKEN);
        localStorage.removeItem(this.REFRESH_TOKEN);
    }
    cambiarContrasena(nombreUsuario: string, contrasena: string, contrasenaNueva: string) {
        const credenciales = {
            codigosistema: "000",
            usuario: nombreUsuario,
            contraseña: contrasena,
            contraseñaNueva: contrasenaNueva
        }
        return this.http.post<any>(
            `${this.apiUrl}cambiarclave`,
            credenciales);
    }
}