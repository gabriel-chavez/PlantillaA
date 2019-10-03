export class RespuestaBase {
    Mensaje: string;
    Exito: boolean;
    Resultado: string;
    CodigoError: number;
    OrdenRetorno: number;
    Excepcion: string;
    constructor(){
      this.Mensaje='';
      this.Exito=false;      
    }
  }
  