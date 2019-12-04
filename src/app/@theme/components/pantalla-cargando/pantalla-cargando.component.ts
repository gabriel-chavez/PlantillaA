import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { debounceTime } from 'rxjs/operators';
import { PantallaCargandoService } from '../../../genericos/servicios/pantalla-cargando.service';


@Component({
  selector: 'uv-pantalla-cargando',
  templateUrl: './pantalla-cargando.component.html',
  styleUrls: ['./pantalla-cargando.component.scss']
})
export class PantallaCargandoComponent implements AfterViewInit, OnDestroy {
  debounceTime: number = 0;
  loading: boolean = false;
  loadingSubscription: Subscription;
  constructor(
    private pantallaCargandoService: PantallaCargandoService, 
    private _elmRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef) { }  
  ngAfterViewInit():void{
    this._elmRef.nativeElement.style.display = 'none';
    this.loadingSubscription = this.pantallaCargandoService.loadingStatus.pipe(debounceTime(this.debounceTime)).subscribe(
      (status: boolean) => {
        this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this._changeDetectorRef.detectChanges();
      }
    )

  }
  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
