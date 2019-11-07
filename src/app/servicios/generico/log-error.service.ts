import { Injectable } from '@angular/core';
import { LogError } from '../../modelos/genericos/log-error.model';

@Injectable({
  providedIn: 'root'
})
export class LogErrorService {
  constructor() { }
  agregar(error:LogError) {
    // enviar error
    console.log('Mensaje: ' + error.mensaje + ' detalle: ' + error.detalle + ' tipo: ' + error.tipo+ ' url: '+error.url);
  }
}
