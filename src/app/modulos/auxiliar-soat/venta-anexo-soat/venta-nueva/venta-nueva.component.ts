import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-venta-nueva',
  templateUrl: './venta-nueva.component.html',
  styleUrls: ['./venta-nueva.component.scss']
})
export class VentaNuevaComponent implements OnInit {
  public opciones:any[]=[
    { title: 'Renovar SOAT',name:'renovar' },
    { title: 'Comprobante SOAT',name:'comprobante' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
