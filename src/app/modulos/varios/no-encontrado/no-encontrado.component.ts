import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';
import { LoginService } from '../../../servicios/auth/login.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'ngx-no-encontrado',
  styleUrls: ['./no-encontrado.component.scss'],
  templateUrl: './no-encontrado.component.html'
})
export class NoEncontradoComponent   {

  constructor(private menuService: NbMenuService, private loginService: LoginService,) { }


  goToHome() {
    this.menuService.navigateHome();
  }
  
  throwError(){
    throw new Error('My Pretty Error');
  }

  throwHttpError(){
    let usr = "";
    let pas = "";
    
    this.loginService.iniciarSesionBorrar(usr, pas).pipe(first())
    .subscribe()
    //this.http.get('urlhere').subscribe();
  }
}
