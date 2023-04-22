import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderComponent } from './hearder/hearder.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MissingAnimalCreationComponent } from './missing-animal-creation/missing-animal-creation.component';
import { FoundAnimalCreationComponent } from './found-animal-creation/found-animal-creation.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MissingAnimalCreationComponent,
    FoundAnimalCreationComponent,
    AnimalListComponent,
    AnimalItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
