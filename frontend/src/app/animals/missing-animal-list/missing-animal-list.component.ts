import {Component, inject, OnDestroy} from '@angular/core';
import {AnimalsService} from "../animals.service";
import {IAnimal} from "../IAnimal";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-missing-animal-list',
  template: `
    <app-animal-list
      [listName]="'Missing animals'"
      [animals]="animals"
      [showAdoptButton]=false
      (onUpdate)="onUpdateFunc($event)"
      (onDelete)="onDeleteFunc($event)"
      [isEditable]=true>
    </app-animal-list>`,
  styles: [
  ]
})
export class MissingAnimalListComponent implements OnDestroy{
  private animalService = inject(AnimalsService);
  private notification = inject(ToastrService);
  private subscription!: Subscription;
  animals!: IAnimal[];

  constructor(private router: Router) {
    this.loadAnimals()
  }

  loadAnimals(){
    this.subscription = this.animalService.getMissingAnimals().subscribe((res) => {
      if (res.success) {
        this.animals = res.data;
      }
    })
  }

  onDeleteFunc(animal: IAnimal){
    this.subscription = this.animalService.removeAnimal(animal._id).subscribe((res) => {
      if (res.success) {
        this.notification.success("Delete animal successfully.")
        this.animals = this.animals.filter( i => i._id !== animal._id);
      }
    })
  }
  onUpdateFunc(animal: IAnimal){
    this.router.navigate(['','animals','update',animal._id]);
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
