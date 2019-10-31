import { Component,Input, Output, EventEmitter  } from '@angular/core';
import { Parametricas } from '../../../modelos/genericos/parametricas.model';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-busqueda-vehiculo',
  templateUrl: './busqueda-vehiculo.component.html',
  styleUrls: ['./busqueda-vehiculo.component.scss']
})
export class BusquedaVehiculoComponent   {
  @Input() opciones:any[];
  public criterioBusqueda:number;
  public criteriosBusqueda:Parametricas[];
  public source: LocalDataSource = new LocalDataSource();
  public descripcionBusqueda:string;
  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      nroComprobante: {
        title: 'Nro Comprobante',
        type: 'number',
       
      },
      placa: {
        title: 'Placa',  
      },
      marca: {
        title: 'Marca',       
      },
      modelo: {
        title: 'Modelo',       
      },
      anio: {
        title: 'Año',       
      },
      clase: {
        title: 'Clase',        
      },
      uso: {
        title: 'Uso',     
      },
      gestion: {
        title: 'Gestión',
      },
      estadoVenta: {
        title: 'Estado de Venta',
      },
      button: {
        title: 'Opciones',
        type: 'custom',       
        renderComponent: ButtonCustomComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.nroComprobante} saved!`)
            
          });
        }
      },
    },
  };

  
  data = [
    {
      nroComprobante: 1,
      placa: '3128UER',
      marca: 'SUZUKI',
      modelo: '5X4',
      anio: '2014',
      clase: 'AUTOMOVIL',
      uso: 'PARTICULAR',
      gestion: '2019',
      estadoVenta: 'VALIDO',
    

    },
   
  ]
  constructor() { 
   
    this.criterioBusqueda=1;
    this.descripcionBusqueda="";
    this.criteriosBusqueda=[
      {secuencial:1,descripcion:"PLACA"},
      {secuencial:2,descripcion:"NRO. MOTOR"},
      {secuencial:3,descripcion:"NRO. CHASIS"},
      {secuencial:4,descripcion:"NRO. ROSETA"},
      {secuencial:5,descripcion:"NRO. COMPROBANTE"},
    ];
    this.source.load(this.data);
    
    
  }
  public placeHolderDescripcionBusqueda():string{   

    return this.criteriosBusqueda.find(x=>x.secuencial==this.criterioBusqueda).descripcion
  }
}


@Component({
  selector: 'button-custom',
  template: `   
    <button nbButton size="tiny" [nbContextMenu]="_opciones" outline status="primary" nbContextMenuTrigger="click" >
        Opciones      
    </button>
    <button nbButton size="tiny" (click)="onClick()">
    prueba
    </button>
  `,
})
export class ButtonCustomComponent   {
  @Input() rowData: any;
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Input() _opciones :any[]=
   [
    { title: 'Renovar SOAT',name:'renovar' },
    { title: 'Comprobante SOAT',name:'comprobante' },
  ];
  onClick() {
    console.log(this.rowData);
    this.save.emit(this.rowData);
  }
}
