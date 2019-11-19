import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { finalize } from 'rxjs/operators';
import { LoginService } from '../../servicios/auth/login.service';
import { CargandoService } from '../../servicios/generico/cargando.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {


    constructor(private loginService: LoginService, private cargando: CargandoService) { }

    intercept(peticion: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {     
        let usuarioActual = this.loginService.currentUserValue;
        if (usuarioActual && usuarioActual.tokenAcceso) {
            peticion = peticion.clone({
                setHeaders: {
                    Authorization: `Bearer ${usuarioActual.tokenAcceso}`
                }
            });
        }

        return next.handle(peticion).pipe(

            finalize(() => {
              console.log("fin peticion")
            })
        );
    }

}
