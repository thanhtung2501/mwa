import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styles: [
  ]
})
export class AnimalItemComponent implements OnInit {
  @Input() animal: any;
  imageSource: any;

  ngOnInit() {
    this.imageSource = this.animal.image_url ? this.animal.image_url : 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png';
  }

}
