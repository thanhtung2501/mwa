import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {
    this.imageSource = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png';
  }

  ngOnInit() {
    console.log(this.animal)
  }

}
