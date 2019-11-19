import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize} from "rxjs/operators";
import { PantallaCargandoService } from '../../servicios/generico/pantalla-cargando.service';


@Injectable()
export class PantallaCargandoInterceptor implements HttpInterceptor {

    activeRequests: number = 0;
    //URLs que en las que no se ejecutara el interceptor
    skippUrls = [];
    constructor(private pantallaCargandoService: PantallaCargandoService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let displayLoadingScreen = true;
        for (const skippUrl of this.skippUrls) {
            if (new RegExp(skippUrl).test(request.url)) {
                displayLoadingScreen = false;
                break;
            }
        }
        if (displayLoadingScreen) {
            if (this.activeRequests === 0) {
                this.pantallaCargandoService.iniciar();
            }
            this.activeRequests++;
            return next.handle(request).pipe(
                finalize(() => {
                    this.activeRequests--;
                    if (this.activeRequests === 0) {
                        this.pantallaCargandoService.detener();
                    }
                })
            )
        } else {
            return next.handle(request);
        }
    };

}