import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title: string = 'Contador App';
  numero: number = 10;

  sumar(){
    this.numero = this.numero+1;
  }
  restar(){
    this.numero = this.numero-1;
  }
}
