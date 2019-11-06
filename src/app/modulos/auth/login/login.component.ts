import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../../../servicios/auth/login.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RespuestaBase } from '../../../modelos/genericos/respuesta-base.model';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  inicioSesionForm: FormGroup;
  respuesta: RespuestaBase = new RespuestaBase();
  mostrarAlerta: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) 
    {
    this.inicioSesionForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
    this.redireccionar();
  }

  iniciarSesion() {
    this.respuesta = new RespuestaBase();
    this.mostrarAlerta = false
    if (this.inicioSesionForm.valid) {

      let usr = this.inicioSesionForm.controls.usuario.value;
      let pas = this.inicioSesionForm.controls.contrasena.value;

      this.inicioSesionForm.reset();
      this.loginService.iniciarSesion(usr, pas)
        .pipe(first())
        .subscribe(
          (data: RespuestaBase) => {
            this.respuesta = data;
            if (this.respuesta.exito) {
              this.redireccionar();
            } else {
              this.inicioSesionForm.setValue({
                usuario: usr,
                contrasena: pas
              });
              this.mostrarAlerta = true;
            }
          }
          , (respuestaError) => {
            this.respuesta = respuestaError.error;
            this.inicioSesionForm.setValue({
              usuario: usr,
              contrasena: pas
            });
            this.mostrarAlerta = true;
          }
        );
    }
  }
  redireccionar() {
    if (this.loginService.estaAtutenticado)
      console.log("redireccionar")
    this.router.navigate(['/modulos']);
  }
}
