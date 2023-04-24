import {Component, inject} from '@angular/core';
import {AnimalsService} from "../animals.service";
import {IAnimal} from "../IAnimal";

@Component({
  selector: 'app-available-animal-list',
  template: `
    <app-animal-list [listName]="'Found animals'"
                     [animals]="animals"></app-animal-list>
  `,
  styles: [
  ]
})
export class AvailableAnimalListComponent {
  private animalService = inject(AnimalsService);
  animals!: IAnimal[];

  constructor() {
    this.loadAnimals()
  }

  loadAnimals(){
    this.animalService.getAllAnimals().subscribe((res) => {
      if (res.success) {
        this.animals = res.data;
      }
    })
  }
}
