import {Component, inject, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {AnimalsService} from "../animals.service";
import {IAnimal} from "../IAnimal";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-found-animal-creation',
  template:`<app-animal-creation
    [animalCreationType]="'found'"
    (performSubmit)="onSubmit($event)"></app-animal-creation>`,
  styles: [
  ]
})
export class FoundAnimalCreationComponent implements OnDestroy{
  private animalService = inject(AnimalsService);
  private subscription! :Subscription;

  constructor(private router: Router) {
  }

  onSubmit(animal: IAnimal) {
    this.subscription = this.animalService.addFoundAnimals(animal as unknown as IAnimal).subscribe((res) => {
      if (res.success) {
        this.router.navigate(['', 'animals','found-animal-list'])
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
