import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AnimalsService } from "../animals.service";
import { IAnimal } from "../IAnimal";
import { NonNullableFormBuilder } from "@angular/forms";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styles: [`
    .px-4 .search {padding-left: 12em}
  `
  ]
})
export class AnimalListComponent {

  @Input() listName: String = "List name"
  @Input() listDescription: String = ""
  @Input() animals: IAnimal[] = []

  @Input() showAdoptButton: boolean = true;
  @Input() isEditable: boolean = true;
  @Input() statusAnimal: string = '';

  @Output() onDelete = new EventEmitter();
  @Output() onUpdate = new EventEmitter();
  @Output() onAccept = new EventEmitter();

  private animalService = inject(AnimalsService);

  searchCondition: String = "All categories"

  onDeleteFunc(animal: IAnimal) {
    this.onDelete.emit(animal);
  }

  onUpdateFunc(animal: IAnimal) {
    this.onUpdate.emit(animal);
  }

  onAcceptFunc(animal: IAnimal) {
    this.onAccept.emit(animal);
  }

  searchFrom = inject(NonNullableFormBuilder).group({
    category: [''],
    sex: ['']
  })

  onSearch() {
    let searchAnimal = this.searchFrom.value as IAnimal;
    searchAnimal.status_animal = this.statusAnimal;
    this.animalService.searchAnimal(searchAnimal).subscribe(response => {
      if (response.success) {
        this.animals = response.data;
      }
    });
  }

}
