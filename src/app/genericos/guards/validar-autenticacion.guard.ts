import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from '../../servicios/auth/login.service';


@Injectable({
  providedIn: 'root'
})
export class ValidarAutenticacion implements CanActivate {
  constructor(private auth: LoginService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean  {     
    const usuarioActual = this.auth.currentUserValue;    
    if(usuarioActual)
    {
      return true;
    }
    else{  
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}