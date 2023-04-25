import { Component, inject, OnDestroy } from '@angular/core';
import { AnimalsService } from "../animals.service";
import { IAnimal } from "../IAnimal";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-found-animal-list',
  template: `
    <app-animal-list
      [listName]="'Found animals'"
      [animals]="animals"
      [statusAnimal]="'FOUND_ANIMAL'"
      [showAdoptButton]=false
      (onDelete)="onDeleteFunc($event)"
      (onUpdate)="onUpdateFunc($event)"
      [isEditable]=true>
    </app-animal-list>
  `,
  styles: [
  ]
})
export class FoundAnimalListComponent implements OnDestroy {
  private animalService = inject(AnimalsService);
  private notification = inject(ToastrService);

  private subscription!: Subscription;
  animals!: IAnimal[];

  constructor() {
    this.loadAnimals()
  }

  loadAnimals() {
    this.subscription = this.animalService.getFoundAnimals().subscribe((res) => {
      if (res.success) {
        this.animals = res.data;
      }
    })
  }

  onDeleteFunc(animal: IAnimal) {
    this.subscription = this.animalService.removeAnimal(animal._id).subscribe((res) => {
      if (res.success) {
        this.notification.success("Delete animal successfully.")
        this.animals = this.animals.filter(i => i._id !== animal._id);
      }
    })
  }
  onUpdateFunc(animal: IAnimal) {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
