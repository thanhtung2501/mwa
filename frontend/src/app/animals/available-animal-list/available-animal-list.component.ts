import {Component, inject, OnDestroy} from '@angular/core';
import {AnimalsService} from "../animals.service";
import {IAnimal} from "../IAnimal";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-available-animal-list',
  template: `
    <app-animal-list [listName]="'Adopt animals'"
                     [listDescription]="'Rescue the poor animals Rescue the poor animals Rescue the poor animals Rescue the poor animals Rescue the poor animalsRescue the poor animals Rescue the poor animals Rescue the poor animals Rescue the poor animals Rescue the poor animals Rescue the poor animals'"
                     [animals]="animals"
                     [showAdoptButton]=true
                     [isEditable]=false
                     (onAccept)="onAcceptFunc($event)"
    ></app-animal-list>
  `,
  styles: [
  ]
})
export class AvailableAnimalListComponent implements OnDestroy{
  private animalService = inject(AnimalsService);
  private subscription !: Subscription;
  animals!: IAnimal[];

  constructor() {
    this.loadAnimals()
  }

  loadAnimals(){
    this.subscription = this.animalService.getAllAnimals().subscribe((res) => {
      if (res.success) {
        this.animals = res.data;
      }
    })
  }

  onAcceptFunc(animal: IAnimal){
    // animal.adopted_user = {}
    console.log(animal);
    // this.subscription = this.animalService.addAdoptAnimals(animal).subscribe((res) => {
    //   if (res.success) {
    //   }
    // })
  }

  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
