import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      subtitulo:[
        {titulo: 'Main', url:'/'},
        {titulo: 'ProgressBar', url:'progress'},
        {titulo: 'Grafica', url:'grafica1'},
      ]
    }
  ];

  constructor() { }

}
