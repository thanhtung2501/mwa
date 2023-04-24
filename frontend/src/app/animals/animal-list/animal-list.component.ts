import { Component, inject } from '@angular/core';
import { AnimalsService } from "../animals.service";
import { IAnimal } from "../IAnimal";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styles: [
  ]
})
export class AnimalListComponent {
  private animalService = inject(AnimalsService);

  animals!: IAnimal[];

  constructor() {
    this.animalService.getAllAnimals().subscribe((res) => {
      if (res.success) {
        this.animals = res.data;
      }
    })
  }

}
