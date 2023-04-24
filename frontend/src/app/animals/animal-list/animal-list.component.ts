import {Component, inject, Input} from '@angular/core';
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




  constructor() {

  }

}
