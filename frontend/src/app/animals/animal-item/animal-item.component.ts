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
  animalModalId: String = "";

  ngOnInit() {
    this.imageSource = this.animal.image_url ? this.animal.image_url : '../../assets/default-image.jpg';
    this.animalModalId = "modal" + this.animal._id;
  }

  onDeleteFunc() {
    this.onDelete.emit(this.animal);
  }
  onUpdateFunc() {
    this.onUpdate.emit(this.animal);
  }
}
