import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { AnimalsService } from "../animals.service";
import { IAnimal } from "../IAnimal";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styles: [
  ]
})
export class AnimalListComponent {

  @Input() listName: String = "List name"
  @Input() listDescription: String = ""
  @Input() animals: IAnimal[] = []

  @Input() showAdoptButton: boolean = true;
  @Input() isEditable: boolean = true;

  @Output() onDelete = new EventEmitter();
  @Output() onUpdate = new EventEmitter();

  onDeleteFunc(animal: IAnimal){
    this.onDelete.emit(animal);
  }
  onUpdateFunc(animal: IAnimal){
    this.onUpdate.emit(animal);
  }

}
