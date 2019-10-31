import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { finalize } from 'rxjs/operators';
import { LoginService } from '../../servicios/auth/login.service';
import { CargandoService } from '../../servicios/generico/cargando.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {


    constructor(private loginService: LoginService, private cargando: CargandoService) { }

    intercept(peticion: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        this.cargando.mostrar();
    
        let usuarioActual = this.loginService.currentUserValue;
        if (usuarioActual && usuarioActual.TokenAcceso) {
            peticion = peticion.clone({
                setHeaders: {
                    Authorization: `Bearer ${usuarioActual.TokenAcceso}`
                }
            });
        }
        return next.handle(peticion).pipe(
      
            finalize(() => {                
                this.cargando.ocultar();
            })
        );
    }

}
