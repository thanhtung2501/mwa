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

  ngOnInit() {
    this.imageSource = this.animal.image_url ? this.animal.image_url : 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png';
  }

  onDeleteFunc() {
    this.onDelete.emit(this.animal);
  }
  onUpdateFunc() {
    this.onUpdate.emit(this.animal);
  }

  onAcceptFunc(animal: IAnimal) {
    this.onAccept.emit(animal);
  }
}
