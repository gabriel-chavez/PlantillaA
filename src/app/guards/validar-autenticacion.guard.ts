import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../servicios/auth/login.service';


@Injectable({
  providedIn: 'root'
})
export class ValidarAutenticacion implements CanActivate {
  constructor(private auth: LoginService,private router:Router){}
  canActivate(): boolean  {
    if(this.auth.estaAtutenticado())
    {
      return true;
    }
    else{
      this.router.navigateByUrl('/auth/login');
      return false;
    }

  }

}