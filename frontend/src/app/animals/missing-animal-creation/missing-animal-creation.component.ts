import {Component, inject, OnDestroy} from '@angular/core';
import {IAnimal} from "../IAnimal";
import {AnimalsService} from "../animals.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-missing-animal-creation',
  template: `<app-animal-creation
    [animalCreationType]="'missing'"
    (performSubmit)="onSubmit($event)">
  </app-animal-creation>`,
  styles: [
  ]
})
export class MissingAnimalCreationComponent implements OnDestroy{
  private animalService = inject(AnimalsService);
  private subscription!: Subscription;

  constructor(private router: Router) {
  }

  onSubmit(animal: IAnimal) {
    this.subscription = this.animalService.addMissingAnimals(animal as unknown as IAnimal).subscribe((res) => {
      if (res.success) {
        this.router.navigate(['', 'animals','missing-animal-list'])
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
