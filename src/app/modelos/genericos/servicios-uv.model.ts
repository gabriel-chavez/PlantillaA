import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RespuestaBase } from './respuesta-base.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

export class ServiciosUv {
    httpOpciones: object;
    private url: string;

    constructor(private http: HttpClient) {
        this.httpOpciones = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Accept': '*/*'
            })
          }
        this.url = environment.servicioTransversalUrl;
    }
    uvGet(metodo: string, objeto: object) {
      
    }
    uvPost(metodo: string, objeto: object) {
        let _objeto: string = JSON.stringify(objeto)
        return this.http.post<any>(
            `${this.url}${metodo}`, _objeto, this.httpOpciones)
            .pipe(
                map((respuestaBase: RespuestaBase) => {                    
                    return respuestaBase;
                })
            );
    }
}
