import {Component, inject} from '@angular/core';
import {AnimalsService} from "../animals.service";
import {IAnimal} from "../IAnimal";

@Component({
  selector: 'app-missing-animal-list',
  template: `
    <app-animal-list [listName]="'Missing animals'"
    [animals]="animals"></app-animal-list>`,
  styles: [
  ]
})
export class MissingAnimalListComponent {
  private animalService = inject(AnimalsService);
  animals!: IAnimal[];

  loadAnimals(){
    this.animalService.getAllAnimals().subscribe((res) => {
      if (res.success) {
        this.animals = res.data;
      }
    })
  }

}
