import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const promesa = new Promise( (resolve,reject) =>{
    //   if(false){
    //   resolve('promesa');
    //   }else{
    //   reject('error');
    //   }
    // });
    
    // promesa.then((msg)=>{
    //   console.log('then',msg);
    // })
    // .catch(error =>{
    //   console.log('error',error)
    // })
    this.getUsuarios().then(usuarios =>{
      console.log(usuarios);
    });
  }

  getUsuarios(){

    return new Promise(resolve =>{
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => resolve(body.data))
    })
    
  }
  

}
