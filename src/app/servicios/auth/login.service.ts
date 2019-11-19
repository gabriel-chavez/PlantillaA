import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'
import { environment } from '../../../environments/environment';
import { RespuestaBase } from '../../modelos/genericos/respuesta-base.model';
import { Token } from '../../modelos/genericos/token.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenRefresh } from '../../modelos/genericos/token-refresh.model';


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private url: string;
    private currentUserSubject: BehaviorSubject<Token>;
    public currentUser: Observable<Token>;
    constructor(private http: HttpClient, private router: Router) {
        this.url = environment.servicioAutenticacionUrl;
        this.currentUserSubject = new BehaviorSubject<Token>(JSON.parse(sessionStorage.getItem('tokenUsuario')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): Token {
        return this.currentUserSubject.value;
    }
    // refrescarToken() {
    //     const tokenRefresh:TokenRefresh = {
    //         tokenAcceso: "2",
    //         codigoActualizacion: 212,
    //         usuarioAut: "xx",
    //         codigoSistema: "000"
    //     }
    //     const httpOpciones = {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json',
    //             'Accept': '*/*'
    //         })
    //     }
    //     return this.http.post<any>(
    //         `${this.url}autenticar`, JSON.stringify(credenciales), httpOpciones)
    //         .pipe(
    //             map((respuestaBase: RespuestaBase) => {
    //                 console.log(respuestaBase)
    //                 if (respuestaBase.exito) {
    //                     let token: Token = JSON.parse(respuestaBase.resultado);
    //                     this.guardarToken(token);
    //                     this.currentUserSubject.next(token);
    //                 }
    //                 else
    //                 {

    //                 }
    //                 return respuestaBase;
    //             })
    //         );
    // }

    iniciarSesion(nombreUsuario: string, contrasena: string) {
        const credenciales = {
            Usuario: nombreUsuario,
            Contraseña: contrasena,
            CodigoSistema: "000"
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
                    console.log(respuestaBase)
                    if (respuestaBase.exito) {
                        let token: Token = JSON.parse(respuestaBase.resultado);
                        this.guardarToken(token);
                        this.currentUserSubject.next(token);
                    }

                    return respuestaBase;
                })
            );
    }
    iniciarSesionBorrar(nombreUsuario: string, contrasena: string) {
        const credenciales = {
            usuario: nombreUsuario,
            contraseña: contrasena,
            codigosistema: "000"
        }
        const httpOpciones = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        }
        return this.http.post<any>(
            `${this.url}autenticasssssr`, JSON.stringify(credenciales), httpOpciones)
            .pipe(
                map((respuestaBase: RespuestaBase) => {
                    console.log(respuestaBase)
                    if (respuestaBase.exito) {
                        let token: Token = JSON.parse(respuestaBase.resultado);
                        this.guardarToken(token);
                        this.currentUserSubject.next(token);
                    }

                    return respuestaBase;
                })
            );
    }
    cerrarSesion() {
        sessionStorage.removeItem('tokenUsuario');
        sessionStorage.removeItem('expira');
        this.currentUserSubject.next(null);        
        console.log("cerrar sesion")
        this.router.navigate(['/auth/login']);
    }
    private guardarToken(token: Token) {

        sessionStorage.setItem('tokenUsuario', JSON.stringify(token));
        //expiracion (temporal)
        let hoy = new Date();
        hoy.setSeconds(3600);
        sessionStorage.setItem('expira', hoy.getTime().toString());
        console.log('Token almacenado')
    }
    public estaAtutenticado(): boolean {
        //TEMPORAL        
        if (!this.currentUserValue)
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
    cambiarContrasena(nombreUsuario: string, contrasena: string, contrasenaNueva: string) {
        const credenciales = {
            codigosistema: "000",
            usuario: nombreUsuario,
            contraseña: contrasena,
            contraseñaNueva: contrasenaNueva
        }
        const httpOpciones = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })
        }
        return this.http.post<any>(
            `${this.url}cambiarclave`, JSON.stringify(credenciales), httpOpciones)
            .pipe(
                map((respuestaBase: RespuestaBase) => {
                    return respuestaBase;
                })
            );
    }
}