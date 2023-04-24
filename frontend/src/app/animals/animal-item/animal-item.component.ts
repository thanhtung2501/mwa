import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  ngOnInit() {
    this.imageSource = this.animal.image_url ? this.animal.image_url : 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png';
  }

  onDeleteFunc(){
    this.onDelete.emit(this.animal);
  }
  onUpdateFunc(){
    this.onUpdate.emit(this.animal)
  }

}
