import { Component, OnInit } from '@angular/core';
import { TablaOpciones } from '../../../../modelos/genericos/uv-datatable.model';



@Component({
  selector: 'ngx-venta-nueva',
  templateUrl: './venta-nueva.component.html',
  styleUrls: ['./venta-nueva.component.scss']
})
export class VentaNuevaComponent implements OnInit {
  public opciones: TablaOpciones[];  
  constructor() {
    this.opciones = [
      {icono:"plus-outline", nombreOpcion: 'Renovar SOAT', funcionEjecutar: this.renovar, funcionDeshabilitaOpcion: null,textoDeshabilitado:"" },
      {icono:"file-text-outline", nombreOpcion: 'Comprobante SOAT', funcionEjecutar: this.comprobante, funcionDeshabilitaOpcion: this.deshabilitar,textoDeshabilitado:"El estado ya es valido" },
    ];
  }
  ngOnInit() {
  }  
  public renovar(registroSeleccionado:Object){
    console.log("renovar",registroSeleccionado);
  }
  public comprobante(registroSeleccionado:Object){
    console.log("comprobante",registroSeleccionado);
  }  
  public deshabilitar(registro:any) {
    console.log(registro.estadoVenta);
    if(registro.estadoVenta=="VALIDO")    
      return true;
    else
      return false;
  }
}
