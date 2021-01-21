import { PatientService } from './services/patient.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { RegistrationFormComponent } from './components/registation/registration-form.component';
import { RecordComponent } from './components/record/record.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditRecordComponent } from './components/edit-record/edit-record.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    RecordComponent,
    EditRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
ReactiveFormsModule
  ],
  entryComponents: [
    RecordComponent
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
