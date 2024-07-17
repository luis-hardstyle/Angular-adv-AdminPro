import { Component, OnDestroy } from '@angular/core';
import {  Observable, Subscription, interval } from 'rxjs';
import {retry, take, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

   intervalSubs: Subscription;


  constructor() { 
    
  //   this.retornaObservable().pipe(
  //     retry(1)
  //   ).subscribe( 
  //     next => console.log(next),
  //     error => console.warn(error),
  //     () => console.info('terminado')

  // );
  this.intervalSubs = this.retornaIntervalo().subscribe(console.log)

}
  ngOnDestroy(): void {
   this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number>{
    return interval(500)
      .pipe(
        //take(10),
         map(valor =>  valor+1), 
         filter(valor => ((valor % 2 === 0)? true:false)),
        );
  }

  retornaObservable(){
    let i = 0;
    return new Observable<number>(observer =>{
   
      const intervalo = setInterval(() =>{
        i ++;
        observer.next(i);
        if(i===4){
          clearInterval(intervalo);
          observer.complete();
        }
        if(i===2)
        {
          observer.error('error')
        }
      },1000)
    });
  }

}
