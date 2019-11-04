
import { Component, OnInit, Input, Output, EventEmitter, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'ngx-datatable-custom',
  template: `
  <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>`
})
export class DatatableCustomComponent implements OnInit {

  @Input() columnas: any;
  @Input() source: any;
  @Input() opciones: any;

  @Output() opcionseleccionada: EventEmitter<any> = new EventEmitter();

  public settings: Object;

  constructor() {

  }
  ngOnInit() {    
    this.columnas.button = this.buttonsCustom();
    this.settings = {
      actions: false,
      columns: this.columnas,
    };        
  }  
  private buttonsCustom(): object {
   let app=this;
    return {
      title: '',
      type: 'custom',
      filter: false,
      valuePrepareFunction: () => {        
        return this.opciones;
      },
      renderComponent: ButtonCustomComponent,
      onComponentInitFunction(instance) {     
        instance.btnPresionado.subscribe(row => {                 
          app.opcionseleccionada.emit(row);          
        });
      }
    }
  }
}
/*****COMPONENTE HIJO******/
@Component({
  selector: 'button-custom',
  template: `   
    <button nbButton size="tiny" [nbContextMenu]="opciones" outline status="primary" nbContextMenuTag="menu-datatable-custom">
        Opciones      
    </button>   
  `,
})
export class ButtonCustomComponent implements OnInit {
  @Input() rowData: any;
  @Input() value: string | number;
  @Output() btnPresionado: EventEmitter<any> = new EventEmitter();
  private opciones:Object;
  constructor(private nbMenuService: NbMenuService){
  }
 
  ngOnInit() {
    this.opciones=this.value;   

    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'menu-datatable-custom'),
        map(x=>{
          return x.item["name"];
        }),
      )
      .subscribe(name => {        
        this.btnPresionado.emit(name);
      });
  }
  
}
