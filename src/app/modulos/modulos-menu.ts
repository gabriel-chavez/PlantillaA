import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'MENU',
    group: true,
  },
  {
    title: 'Auxiliar SOAT',
    icon: 'people-outline',
    children: [  
      {
        title: 'Venta y anexo de SOAT',
     //   link: '/modulos/auxiliar-soat',
        children: [
          {
            title: 'Venta Nueva',
            link: '/modulos/auxiliar-soat/venta-anexo-soat/venta-nueva',
          },
          {
            title: 'Ventas Realizadas',
            link: '/modulos/auxiliar-soat/venta-anexo-soat/ventas-realizadas',
          },          
        ],
      }, 
      {
        title: 'Rcv SOAT',
       // link: '/modulos/auxiliar-soat',
        children: [
          {
            title: 'Nuevo',
            link: '/modulos/auxiliar-soat/rcv-soat/nuevo',
          },
          {
            title: 'Realizados',
            link: '/modulos/auxiliar-soat/rcv-soat/realizados',
          },          
        ],
      },   
    ],
  },
  
  
];
