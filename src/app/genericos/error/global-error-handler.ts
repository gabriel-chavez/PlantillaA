import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertaService } from '../../servicios/generico/alerta.service';

import { LogErrorService } from '../../servicios/generico/log-error.service';
import { LogError } from '../../modelos/genericos/log-error.model';
import { ErrorService } from '../../servicios/generico/error.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) {
  }
  
  handleError(error: Error | HttpErrorResponse) {
   // alert("asdasdasdasd")
    const errorService = this.injector.get(ErrorService);
    const logError= this.injector.get(LogErrorService);
    const alerta = this.injector.get(AlertaService);
    let oLogError:LogError=new LogError();   
    if (error instanceof HttpErrorResponse) {
      // Server error      
      oLogError.mensaje = errorService.obtenerMensajeErrorServer(error);
      oLogError.tipo="HttpErrorResponse";
      alerta.error(oLogError.mensaje);
    } else {
      // Cliente Error      
      oLogError.mensaje = errorService.obtenerMensajeErrorCliente(error);
      alerta.error( oLogError.mensaje);
      oLogError.tipo="Javascript";
    }
    // stack para todos los errores
    oLogError.detalle=errorService.obtenerStackError(error);
    
    oLogError.url=errorService.obtenerUrlError();
    logError.agregar(oLogError);
    console.error(oLogError);
  }
}