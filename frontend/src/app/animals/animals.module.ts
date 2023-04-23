import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissingAnimalCreationComponent } from "./missing-animal-creation/missing-animal-creation.component";
import { FoundAnimalCreationComponent } from "./found-animal-creation/found-animal-creation.component";
import { AnimalListComponent } from "./animal-list/animal-list.component";
import { AnimalItemComponent } from "./animal-item/animal-item.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UpdateComponent as UpdateAnimalComponent } from './updateAnimal.component';


@NgModule({
  declarations: [
    MissingAnimalCreationComponent,
    FoundAnimalCreationComponent,
    AnimalListComponent,
    AnimalItemComponent,
    UpdateAnimalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: AnimalListComponent, title: "Animal list" },
      { path: 'create-missing-animal', component: MissingAnimalCreationComponent, title: "Create missing animal" },
      { path: 'create-found-animal', component: FoundAnimalCreationComponent, title: "Create found animal" },
      { path: 'animal-list', component: AnimalListComponent, title: "Animal list" }
    ])
  ]
})
export class AnimalsModule { }
