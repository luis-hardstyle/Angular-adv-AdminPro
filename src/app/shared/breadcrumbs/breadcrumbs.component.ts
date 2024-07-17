import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  titulo: string;
  tituloSubs$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    // console.log(this.route.snapshot.children[0].data)
  }
  ngOnInit(): void {
    this.tituloSubs$ = this.getParametrosRuta().subscribe(data =>{
      this.titulo = data.titulo;
      document.title =  `AdminPro - ${this.titulo}`
      console.log(data, 'titulo',this.titulo)

      })   
  }
  
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getParametrosRuta(){
   return this.router.events
    .pipe(
      filter(event=> event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data)
    )
    

  }



}
