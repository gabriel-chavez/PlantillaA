import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-no-encontrado',
  styleUrls: ['./no-encontrado.component.scss'],
  templateUrl: './no-encontrado.component.html'
})
export class NoEncontradoComponent   {

  constructor(private menuService: NbMenuService) { }


  goToHome() {
    this.menuService.navigateHome();
  }
}
