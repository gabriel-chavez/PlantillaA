import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-venta-nueva',
  templateUrl: './venta-nueva.component.html',
  styleUrls: ['./venta-nueva.component.scss']
})
export class VentaNuevaComponent implements OnInit {
  public opciones:any[];
  public nombreOpcion:string;
  constructor() { 
    this.opciones=[
      { title: 'Renovar SOAT PRIUEBA',name:'renovar' },
      { title: 'Comprobante SOAT xxxxx',name:'comprobante' },
    ];
  }

  ngOnInit() {
  }

  public ejecutarOpcion(nombreOpcion){
    this.nombreOpcion=nombreOpcion;
  }

}
