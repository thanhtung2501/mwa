import {Component, inject} from '@angular/core';
import {IAnimal} from "../IAnimal";
import {AnimalsService} from "../animals.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-missing-animal-creation',
  template: `<app-animal-creation [animalCreationType]="'missing'" (performSubmit)="onSubmit($event)"></app-animal-creation>`,
  styles: [
  ]
})
export class MissingAnimalCreationComponent {
  private animalService = inject(AnimalsService);

  constructor(private router: Router) {
  }

  onSubmit(animal: IAnimal) {
    this.animalService.addMissingAnimals(animal as unknown as IAnimal).subscribe((res) => {
      if (res.success) {
        this.router.navigate(['', 'animals'])
      }
    })
  }
}
