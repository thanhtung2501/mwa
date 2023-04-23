import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderComponent } from './hearder/hearder.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateService } from './services/state.service';


function bootstrap(stateService: StateService) {
  return () => {
    const persistedState = localStorage.getItem('APP_STATE');
    if (persistedState) {
      stateService.setState(JSON.parse(persistedState));
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: bootstrap, deps: [StateService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
