import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
    providedIn: 'root'
})
export class CargandoService {    
    constructor(private spinner: NgxSpinnerService) {}
    mostrar(){              
        this.spinner.show(undefined, { fullScreen: true });                          
    }
    ocultar(){      
        this.spinner.hide();
    }
    
}