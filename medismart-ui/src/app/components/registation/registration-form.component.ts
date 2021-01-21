import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration-form-component',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  gender = ['Female', 'Male'];
  registrationForm: FormGroup;

  constructor( private fb: FormBuilder, private snackBar: MatSnackBar, private patientService: PatientService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: [null, Validators.pattern('[0-9]*')],
      emailAddress: [''],
      age: [Date],
      gender: [''],
      weight: [null],
      height: [null],
      address: [''],
      underlyingCondition: ['']
    })
  }

  viewRecords(){

  }

  formatObject(){
    this.registrationForm.get('age').setValue(parseInt(this.registrationForm.get('age').value, 10));
    this.registrationForm.get('gender').setValue(parseInt(this.registrationForm.get('gender').value, 10));
  }

  submitForm(){ 
    this.formatObject();
    this.patientService.addNewPatient(this.registrationForm.value).subscribe();
    this.snackBar.open('Patient Record Submitted');
    this.registrationForm.reset();
  }

}
