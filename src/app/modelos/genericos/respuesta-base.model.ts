export class RespuestaBase {
    mensaje: string;
    exito: boolean;
    resultado: string;
    codigoError: number;
    ordenRetorno: number;
    excepcion: string;
    constructor(){
      this.mensaje='';
      this.exito=false;      
    }
  }
  