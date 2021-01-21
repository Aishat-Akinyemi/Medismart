import { IPatient } from './../../models/patient';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  gender = ['Female', 'Male'];
  recordEditForm: FormGroup;
  patient: IPatient;

  constructor( private fb: FormBuilder, private snackBar: MatSnackBar, private patientService: PatientService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
      if(param) {
        const id= parseInt(param, 10);
        this.patientService.getPatientById(id).subscribe(
          (patient) => {
            this.patient = patient;
            this.recordEditForm = this.fb.group({
              name: [this.patient.name, Validators.required],
              phoneNumber: [this.patient.phoneNumber, Validators.pattern('[0-9]*')],
              email: [this.patient.email],
              age: [this.patient.age, Validators.pattern('[0-9]*')],
              gender: [this.patient.gender],
              bmi: [this.patient.bmi],
              address: [this.patient.address],
              underlyingCondition: [this.patient.underlyingCondition]
            })
          }
        )
      }
   
  }

  formatObject(){
    
    
    this.recordEditForm.controls['bmi'].setValue(parseFloat(this.recordEditForm.get('bmi').value));
    this.recordEditForm.controls['age'].setValue(parseInt(this.recordEditForm.get('age').value, 10));
    this.recordEditForm.controls['gender'].setValue(parseInt(this.recordEditForm.get('gender').value, 10));
    

  }

  submitForm(){ 
    this.formatObject();
    this.patientService.editPatient(this.patient.patientID, this.recordEditForm.value).subscribe();
    this.snackBar.open('Patient Record Updated', 'close', {duration:1000});
    this.router.navigate(['/records']);
  }

  goBack(){
    this.router.navigate(['/records']);
  }

}


