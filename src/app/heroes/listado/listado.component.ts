import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Iroman','Hulk','Thor'];
    heroeBorrado: string = '';

    borrarHeroe(){
      this.heroeBorrado = this.heroes.shift() || '';
       
    }
}
