import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalCreationComponent } from "./animal-creation/animal-creation.component";
import { FoundAnimalCreationComponent } from "./found-animal-creation/found-animal-creation.component";
import { AnimalListComponent } from "./animal-list/animal-list.component";
import { AnimalItemComponent } from "./animal-item/animal-item.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UpdateAnimalComponent } from './updateAnimal.component';
import { AnimalComponent } from './animal.component';
import { MissingAnimalCreationComponent } from './missing-animal-creation/missing-animal-creation.component';
import { MissingAnimalListComponent } from './missing-animal-list/missing-animal-list.component';


@NgModule({
  declarations: [
    AnimalCreationComponent,
    FoundAnimalCreationComponent,
    AnimalListComponent,
    AnimalItemComponent,
    UpdateAnimalComponent,
    AnimalComponent,
    MissingAnimalCreationComponent,
    MissingAnimalListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: AnimalListComponent, title: "Animal list" },
      { path: 'create-missing-animal', component: MissingAnimalCreationComponent, title: "Create missing animal" },
      { path: 'create-found-animal', component: FoundAnimalCreationComponent, title: "Create found animal" },
      // { path: 'animal-list', component: AnimalListComponent, title: "Animal list" },
      { path: 'update/:animal_id', component: UpdateAnimalComponent, title: "Update animal" },
      { path: ':animal_id', component: AnimalComponent, title: "Animal details" }
    ])
  ]
})
export class AnimalsModule { }
