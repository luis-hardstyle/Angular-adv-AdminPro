import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public labels2: string[] = ['Completos', 'Pepsi', 'Hielo'];
  public labels3: string[] = ['Fruta', 'Verduras', 'Otros'];
  public data1 = [
    [10, 15, 40],
  ];
  public data2 = [
    [20, 35, 50],
  ];
  public data3 = [
    [15, 25, 30],
  ];
}
