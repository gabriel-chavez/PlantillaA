import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'uv-frm-validacion',
  templateUrl: './frm-validacion.component.html'
 
})
export class FrmValidacionComponent {
  @Input() mensaje: string;
  @Input() campo: string;
  @Input() form: FormGroup;
  cxx:string;

  esValido() {    
   
    return !this.form.get(this.campo).valid && this.form.get(this.campo).touched;
  }  
}