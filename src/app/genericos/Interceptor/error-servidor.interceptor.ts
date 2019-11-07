import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AlertaService } from '../../servicios/generico/alerta.service';
import { ActivatedRoute } from '@angular/router';
import { CargandoService } from '../../servicios/generico/cargando.service';


// @Injectable()
// export class ErrorServidorInterceptor implements HttpInterceptor {

//   constructor(private alerta: AlertaService, private route: ActivatedRoute, private cargando: CargandoService) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     this.cargando.ocultar();
//     return next.handle(request).pipe(
//       retry(1),
//       catchError(error => {        
//       if (error.status === 401) {
//         // refresh token
//         console.log("refresh Token");
//       } else {
//         console.log("Error!!!!!!!!!!!!!!!!!");
//         return throwError(error);
//       }
//     }))
//   }
// }


@Injectable()
export class ErrorServidorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // refresh token
        } else {
          console.log(error)
          return throwError(error);
        }
      })
    );    
  }
}
