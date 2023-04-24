import {Component, inject} from '@angular/core';
import {NonNullableFormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {AnimalsService} from "../animals.service";
import {IAnimal} from "../IAnimal";

@Component({
  selector: 'app-found-animal-creation',
  template:`<app-animal-creation [animalCreationType]="'found'" (performSubmit)="onSubmit($event)"></app-animal-creation>`,
  styles: [
  ]
})
export class FoundAnimalCreationComponent {
  private animalService = inject(AnimalsService);

  constructor(private router: Router) {
  }

  onSubmit(animal: IAnimal) {
    this.animalService.addFoundAnimals(animal as unknown as IAnimal).subscribe((res) => {
      if (res.success) {
        this.router.navigate(['', 'animals'])
      }
    })
  }
}
