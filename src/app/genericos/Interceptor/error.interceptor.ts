import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertaService } from '../../servicios/generico/alerta.service';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private alerta: AlertaService, private route: ActivatedRoute) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => {  
      console.log(error)
      console.log(error.message) 
      this.alerta.error(error.message);
     /* //el error 403 no se mostrara cuando sea una solicitud de autenticacion (el mensaje 403 sera mostrado por el modulo de autenticacion)  
      if (error.status === 403 && !request.url.includes("autenticacion/api/autenticar")) {                 
        this.alerta.error(error.error.Mensaje);      
      }*/
      
      return throwError(error);
    }))
  }
}
