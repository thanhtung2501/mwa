import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAnimal } from "../IAnimal";

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.css']
})
export class AnimalItemComponent implements OnInit {
  @Input() animal: any;

  imageSource: any;

  @Input() showAdoptButton: boolean = true;
  @Input() isEditable: boolean = true;
  @Output() onDelete = new EventEmitter();
  @Output() onUpdate = new EventEmitter();
  @Output() onAccept = new EventEmitter();

  openModalBtnId: string = ""
  closeModalBtnId: string = ""
  declineModalBtnId: string = ""
  modalId: string = ""

  ngOnInit() {
    this.imageSource = this.animal.image_url ? this.animal.image_url : '../../assets/default-image.jpg';
    this.openModalBtnId = `openModal${this.animal._id}`;
    this.modalId =`modal${this.animal._id}`;
    this.closeModalBtnId = `closeModal${this.animal._id}`;
    this.declineModalBtnId = `declineModal${this.animal._id}`;
    if(this.animal.status_animal === "ADOPTED_ANIMAL") {
      this.showAdoptButton = false;
    }
  }

  onDeleteFunc() {
    this.onDelete.emit(this.animal);
  }
  onUpdateFunc() {
    this.onUpdate.emit(this.animal);
  }
}
