import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PantallaCargandoService } from '../../servicios/generico/pantalla-cargando.service';



@Injectable()
export class ErrorServidorInterceptor implements HttpInterceptor {
  constructor(private pantallaCargandoService: PantallaCargandoService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        this.pantallaCargandoService.detener();
        console.log(error)
        if (error.status === 0) {
      //    alert("refrescar token")
          // refresh token
        } else {        
          return throwError(error);
        }
      })
    );    
  }
}
