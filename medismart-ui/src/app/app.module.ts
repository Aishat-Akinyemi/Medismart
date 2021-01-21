import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { NavbarComponentComponent } from './components/navbar-component.component';
import { RegistrationFormComponentComponent } from './components/registation/registration-form-component.component';
import { RecordComponentComponent } from './components/record/record-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    RegistrationFormComponentComponent,
    RecordComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
