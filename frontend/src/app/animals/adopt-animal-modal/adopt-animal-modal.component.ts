import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {IAnimal} from "../IAnimal";
import {NonNullableFormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-adopt-animal-modal',
  templateUrl: './adopt-animal-modal.component.html',
  styles: [
  ]
})
export class AdoptAnimalModalComponent {

  @Input() modalId: String = ""
  @Input() animal!: IAnimal

  @Output() onAccept = new EventEmitter();
  onAcceptFunc(){
    this.onAccept.emit(this.animal);
  }

  animalAdoptForm = inject(NonNullableFormBuilder).group({
    adopt_date: [new Date(), Validators.required]
  })
}
