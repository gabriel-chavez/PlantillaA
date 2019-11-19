import { Injectable, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
    providedIn: 'root'
})
export class CargandoService {    
   

    constructor(
        private spinner: NgxSpinnerService,       
      //  private ref: ChangeDetectorRef
        ) {}
    mostrar(){     
        console.log("mostrar loading");
        this.spinner.show("spcargando", { fullScreen: false });                          
    }
    ocultar(){
        //console.log("ocultar loading");
       // this.spinner.hide("spcargando");  
        
       
          setTimeout(() => {
            console.log("ocultar loading");
            this.spinner.hide("spcargando");   
          }, 1000);         
    }
    
}