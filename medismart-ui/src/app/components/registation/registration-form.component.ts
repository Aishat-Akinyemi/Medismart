import { RecordComponent } from './../record/record.component';
import { IPatient } from './../../models/patient';
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
      email: [''],
      age: [null, Validators.pattern('[0-9]*')],
      gender: [''],
      weight: [null],
      height: [null],
      address: [''],
      underlyingCondition: ['']
    })
  }

  viewRecords(){
    console.log('done');
    this.matDialog.open(RecordComponent, {
      height: 'auto', width: 'auto'
    });
  }

  formatObject(){
    
    let patientObj: IPatient= {name:"", phoneNumber:'', email:'', age:null, gender:null, bmi:null, address:'', underlyingCondition:''};
    patientObj.bmi = this.registrationForm.get('weight').value/(this.registrationForm.get('weight').value^2);
    patientObj.name = this.registrationForm.get('name').value;
    patientObj.email = this.registrationForm.get('email').value;
    patientObj.age = parseInt(this.registrationForm.get('age').value, 10);
    patientObj.gender = parseInt(this.registrationForm.get('gender').value, 10);
    patientObj.address = this.registrationForm.get('address').value;
    patientObj.underlyingCondition = this.registrationForm.get('underlyingCondition').value;
    return patientObj;

  }

  submitForm(){ 
    const patient= this.formatObject();
    this.patientService.addNewPatient(patient).subscribe();
    this.snackBar.open('Patient Record Submitted', 'close', {duration:1000});
    this.registrationForm.reset();
  }

}
