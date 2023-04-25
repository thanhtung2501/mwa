import { Component, inject, OnDestroy } from '@angular/core';
import { AnimalsService } from "../animals.service";
import { IAnimal } from "../IAnimal";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-available-animal-list',
  template: `
    <app-animal-list [listName]="'Adopt animals'"
                     [listDescription]="'Rescue the poor animals Rescue the poor animals Rescue the poor animals Rescue the poor animals Rescue the poor animalsRescue the poor animals Rescue the poor animals Rescue the poor animals Rescue the poor animals Rescue the poor animals Rescue the poor animals'"
                     [animals]="animals"
                     [showAdoptButton]=true
                     [isEditable]=false
    ></app-animal-list>
  `,
  styles: [
  ]
})
export class AvailableAnimalListComponent implements OnDestroy {
  private animalService = inject(AnimalsService);
  private subscription !: Subscription;
  animals!: IAnimal[];

  constructor() {
    this.loadAnimals()
  }

  loadAnimals() {
    this.subscription = this.animalService.getAdoptAnimals().subscribe((res) => {
      if (res.success) {
        this.animals = res.data;
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
