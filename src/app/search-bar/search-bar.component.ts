import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auto } from '../auto';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() autos: Auto[] = [];
  @Output() selectAutoEvent = new EventEmitter<Auto[]>();

  carBrand: string = '';
  filteredAutos: Auto[] = [];
  selectedAuto: Auto | null = null;

  searchAutoList() {
    this.filteredAutos = this.autos.filter(auto => auto.marque.toLowerCase() === this.carBrand.toLowerCase());
    if (this.filteredAutos.length > 0) {
      this.selectAutoEvent.emit(this.filteredAutos);
    } else {
      this.selectAutoEvent.emit([]);
    }
    this.selectedAuto = null;
  }

  viewMore(auto: Auto) {
    this.selectedAuto = auto;
  }

  backToList() {
    this.selectedAuto = null;
  }

}
