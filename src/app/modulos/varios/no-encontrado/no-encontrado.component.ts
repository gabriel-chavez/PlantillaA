import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-no-encontrado',
  styleUrls: ['./no-encontrado.component.scss'],
  templateUrl: './no-encontrado.component.html'
})
export class NoEncontradoComponent   {

  constructor(private menuService: NbMenuService, private http: HttpClient) { }


  goToHome() {
    this.menuService.navigateHome();
  }
  
  throwError(){
    throw new Error('My Pretty Error');
  }

  throwHttpError(){
    this.http.get('urlhere').subscribe();
  }
}
