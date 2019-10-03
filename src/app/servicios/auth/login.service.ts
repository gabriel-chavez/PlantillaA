import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'
import { environment } from '../../../environments/environment';
import { RespuestaBase } from '../../modelos/genericos/respuesta-base.model';
import { Token } from '../../modelos/genericos/token.model';


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private url: string;
    public tokenUsuario: string;
    public codigoActualizacionUsuario: number;

    constructor(private http: HttpClient) {
        this.url = environment.servicioAutenticacionUrl;
        this.leerToken();
    }
    cerrarSesion() {
        sessionStorage.removeItem('tokenUsuario');
        sessionStorage.removeItem('codigoActualizacionUsuario');
        sessionStorage.removeItem('expira');
        console.log("cerrar sesion")
    }
    iniciarSesion(nombreUsuario: string, contraseña: string) {

        const credenciales = {
            usuario: nombreUsuario,
            contraseña: contraseña,
            codigosistema: "028"
        }
        const httpOpciones = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        }        
        return this.http.post<any>(
            `${this.url}autenticar`, JSON.stringify(credenciales), httpOpciones)
            .pipe(
                map((respuestaBase: RespuestaBase) => {                    
                    let token: Token = JSON.parse(respuestaBase.Resultado);                    
                    this.guardarToken(token);
                    return respuestaBase;
                })
            );
    }

    private guardarToken(token:Token) {
        this.tokenUsuario = token.TokenAcceso;
        this.codigoActualizacionUsuario = token.CodigoActualizacion;
        sessionStorage.setItem('tokenUsuario', token.TokenAcceso);
        sessionStorage.setItem('codigoActualizacionUsuario', token.CodigoActualizacion.toString());
        let hoy = new Date();
        hoy.setSeconds(3600); //podriamos obtener el dato del resp
        sessionStorage.setItem('expira', hoy.getTime().toString());
        console.log('Token almacenado')
    }
    private leerToken() {
        if (sessionStorage.getItem('tokenUsuario')) {
            this.tokenUsuario = sessionStorage.getItem('tokenUsuario')
        }
        else {
            this.tokenUsuario = '';
        }
        if (sessionStorage.getItem('codigoActualizacionUsuario')) {
            this.codigoActualizacionUsuario = Number(sessionStorage.getItem('codigoActualizacionUsuario'))
        }
        else {
            this.codigoActualizacionUsuario = 0;
        }
    }
    public estaAtutenticado(): boolean {
        //TEMPORAL
        if (this.tokenUsuario.length < 2)
            return false
        const expira = Number(sessionStorage.getItem('expira'));
        const expiraDate = new Date();
        expiraDate.setTime(expira);
        if (expiraDate > new Date()) {
            return true
        }
        else {
            return false
        }
    }
}