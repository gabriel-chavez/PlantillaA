import { Injectable } from '@angular/core';
import { LogError } from '../../modelos/genericos/log-error.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, delay } from 'rxjs/operators';
import { RespuestaBase } from '../../modelos/genericos/respuesta-base.model';
import { AlertaService } from './alerta.service';
import { CargandoService } from './cargando.service';

@Injectable({
  providedIn: 'root'
})
export class LogErrorService {
  private url: string;
  
  constructor(private http: HttpClient, private alerta: AlertaService, private cargando:CargandoService) {
    this.url = environment.servicioTransversalUrl;
  }

  agregarLog(error: LogError) {   
    let nombreUsuario = "LCHAVEZ_1";
    const _logError = {
      UsuarioAut: nombreUsuario,
      CodigoSistema: "000",
      Tipo: error.tipo,
      Mensaje: error.mensaje,
      Detalle: error.detalle,
      Url: error.url
    }
    const httpOpciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*'
      })
    }
   console.log(_logError)
 
    return this.http.post<any>(
      `${this.url}registrar`, JSON.stringify(_logError), httpOpciones)
      .pipe(
        map((respuestaBase: RespuestaBase) => {            
         
          this.alerta.error(respuestaBase.mensaje);                                          
          return respuestaBase;
        })
      );    
   }
}
