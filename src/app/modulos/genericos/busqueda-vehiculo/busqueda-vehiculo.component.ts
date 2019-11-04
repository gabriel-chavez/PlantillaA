import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Parametricas } from '../../../modelos/genericos/parametricas.model';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-busqueda-vehiculo',
  templateUrl: './busqueda-vehiculo.component.html',
  styleUrls: ['./busqueda-vehiculo.component.scss']
})
export class BusquedaVehiculoComponent {
  @Input() opciones: any[];
  @Output() opcionseleccionada: EventEmitter<string> =new EventEmitter();
  public criterioBusqueda: number;
  public criteriosBusqueda: Parametricas[];
  public source: LocalDataSource = new LocalDataSource();
  public descripcionBusqueda: string;

  public columnas:Object = {
    nroComprobante: {
      title: 'Nro Comprobante',      
      filter:false
    },
    placa: {
      title: 'Placa',
      filter:false
    },
    marca: {
      title: 'Marca',
      filter:false
    },
    modelo: {
      title: 'Modelo',
      filter:false
    },
    anio: {
      title: 'Año',
      filter:false
    },
    clase: {
      title: 'Clase',
      filter:false
    },
    uso: {
      title: 'Uso',
      filter:false
    },
    gestion: {
      title: 'Gestión',
      filter:false
    },
    estadoVenta: {
      title: 'Estado de Venta',
      filter:false
    }
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
    this.criterioBusqueda = 1;
    this.descripcionBusqueda = "";
    this.criteriosBusqueda = [
      { secuencial: 1, descripcion: "PLACA" },
      { secuencial: 2, descripcion: "NRO. MOTOR" },
      { secuencial: 3, descripcion: "NRO. CHASIS" },
      { secuencial: 4, descripcion: "NRO. ROSETA" },
      { secuencial: 5, descripcion: "NRO. COMPROBANTE" },
    ];
    this.source.load(this.data);
  }
  public placeHolderDescripcionBusqueda(): string {
    return this.criteriosBusqueda.find(x => x.secuencial == this.criterioBusqueda).descripcion
  }
  public ejecutarOpcion(nombreOpcion:string){   
    this.opcionseleccionada.emit(nombreOpcion);
  }
}


