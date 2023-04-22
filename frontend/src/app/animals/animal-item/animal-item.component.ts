import {Component, Input, OnInit} from '@angular/core';
import {IAnimal} from "../IAnimal";

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styles: [
  ]
})
export class AnimalItemComponent implements OnInit{
  @Input() animal: any;

  ngOnInit() {
    console.log(this.animal)
  }

}
