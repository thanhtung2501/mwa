import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IAnimal } from "../IAnimal";

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styles: [
  ]
})
export class AnimalItemComponent implements OnInit {
  @Input() animal: any;

  imageSource: any;

  @Input() showAdoptButton: boolean = true;
  @Input() isEditable: boolean = true;
  @Output() onDelete = new EventEmitter();
  @Output() onUpdate = new EventEmitter();

  constructor() {
    this.imageSource = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png';
  }

  ngOnInit() {
    console.log(this.animal)
  }

  onDeleteFunc(){
    this.onDelete.emit(this.animal);
  }
  onUpdateFunc(){
    this.onUpdate.emit(this.animal)
  }

}
