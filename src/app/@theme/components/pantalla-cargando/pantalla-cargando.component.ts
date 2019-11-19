import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { debounceTime } from 'rxjs/operators';
import { PantallaCargandoService } from '../../../servicios/generico/pantalla-cargando.service';


@Component({
  selector: 'uv-pantalla-cargando',
  templateUrl: './pantalla-cargando.component.html',
  styleUrls: ['./pantalla-cargando.component.scss']
})
export class PantallaCargandoComponent implements OnInit,OnDestroy  {
  loading: boolean = false;
  loadingSubscription: Subscription;
  constructor(private pantallaCargandoService: PantallaCargandoService) { }

  ngOnInit() {
    this.loadingSubscription = this.pantallaCargandoService.loadingStatus.pipe(
    //  debounceTime(200)      
    ).subscribe((value) => {
      this.loading = value;      
    });
  }
  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
