import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertaService } from '../servicios/alerta.service';

import { LogErrorService } from '../servicios/log-error.service';
import { LogError } from '../../modelos/genericos/log-error.model';
import { ErrorService } from '../servicios/error.service';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) {
  }
  
  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    const logError= this.injector.get(LogErrorService);
    
    let oLogError:LogError=new LogError();   
    if (error instanceof HttpErrorResponse) {
      // Server error      
      oLogError.mensaje = errorService.obtenerMensajeErrorServer(error);
      oLogError.tipo="HttpErrorResponse";
      
    } else {
      // Cliente Error      
      oLogError.mensaje = errorService.obtenerMensajeErrorCliente(error);      
      oLogError.tipo="Javascript";
      
    }
    console.error(error);
    // stack para todos los errores
    oLogError.detalle=errorService.obtenerStackError(error);    
    oLogError.url=errorService.obtenerUrlError();

    logError.agregarLog(oLogError).subscribe();  
  }
  
}