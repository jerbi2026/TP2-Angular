import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auto } from './auto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'showroom-auto';
  autoList: Auto[] = [
    { marque: 'Audi', model: 'A3', price: 58000, puissance: 120, image: 'a3.png', nb_unite: 6 },
    { marque: 'Evoque', model: 'smart', price: 15000, puissance: 787, image: 'evoque.png', nb_unite: 5 },
    { marque: 'mercedes', model: 'gla', price: 85000, puissance: 208, image: 'gla.png', nb_unite: 10 },
    { marque: 'hyuandai', model: 'tucson', price: 30000, puissance: 40, image: 'tucson.png', nb_unite: 23 },
    { marque: 'two', model: 'm32', price: 30740, puissance: 14, image: 'two.png', nb_unite: 75 },
  
  ];

  selectedAuto: Auto | null = null;

  updateAuto(filteredAutos: Auto[]) {
    if (filteredAutos.length > 0) {
        this.selectedAuto = filteredAutos[0];
    } else {
        this.selectedAuto = null;
    }
}
}
