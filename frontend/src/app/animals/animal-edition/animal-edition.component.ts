import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-edition',
  template: `
    <app-animal-creation
      [animalCreationType]="'updateAnimal'"
    ></app-animal-creation>
  `,
  styles: [
  ]
})
export class AnimalEditionComponent {

}
