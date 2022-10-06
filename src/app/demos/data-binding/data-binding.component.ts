import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent  {
  public contadorClique : number = 0;
  public urlImagem : string = "https://st2.depositphotos.com/1005147/5192/i/450/depositphotos_51926417-stock-photo-hands-holding-the-sun-at.jpg";
  public nome : string = "";

  adicionarClique(){
    this.contadorClique++;
  }
  zerarContador(){
    this.contadorClique = 0;
  }

  KeyUp(event: any){
    this.nome = event.target.value;
  }
} 
