import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import * as StackTrace from 'stacktrace-js';
@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(public location: LocationStrategy) {
  }
  obtenerMensajeErrorCliente(error: Error): string {
    return error.message ?
      error.message :
      error.toString();
  }
  obtenerMensajeErrorServer(error: HttpErrorResponse): string {
    return navigator.onLine ?
      error.message :
      'No se tiene conección';
  }
  obtenerStackError(error: Error): string {
    //obtenemos las primeras 10 lineas de la pila de errores
    // let stack=StackTrace.fromError(error).then(stackframes => {
    //   const stackString = stackframes
    //     .splice(0, 100)
    //     .map(function (sf) {
    //       console.log(sf)
    //       return sf.toString();
    //     }).join('\n');      
    //   return stackString;
    // });
    // console.log("Mensjae error stack",stack);
  //  console.log("error javascript",error)
    return JSON.stringify(error);
  }
  obtenerUrlError():string {
    const url = this.location instanceof PathLocationStrategy
      ? this.location.path() : '';
    return url;
  }
}
