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
        link: '/modulos/proveedores/lista',
        children: [
          {
            title: 'Venta Nueva',
            link: '/pages/layout/stepper',
          },
          {
            title: 'Ventas Realizadas',
            link: '/pages/layout/list',
          },          
        ],
      }, 
      {
        title: 'RCV SOAT',
        link: '/modulos/proveedores/lista',
        children: [
          {
            title: 'Nuevo',
            link: '/pages/layout/stepper',
          },
          {
            title: 'Realizados',
            link: '/pages/layout/list',
          },          
        ],
      },   
    ],
  },
  
  
];
