import { IPatient } from './../../models/patient';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-record-component',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  patients: IPatient[];
  @ViewChild(MatTable) table: MatTable<any>;
  errorMessage: any;
  displayedColumns: string[] = ['id', 'name', 'phoneNumber','email', 'gender', 'age', 'bmi', 'address', 'bmi','underlyingCondition', 'edit', 'delete' ]
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe({
      next: (patients)  => {
        this.patients = patients;
      },
      error: (err) => {this.errorMessage = err; }
    })
  }
 
  deletePatient(patientDel: IPatient){
   

  //   this.patientService.deletePatient(patientDel).subscribe(
  //     () => {
  //       this.patients = this.patients.filter((patient) => patient.patientID !== patientDel.patientID);
  //       this.table.renderRows();
  //     }
  //   )
  // }

  this.patientService.deletePat(patientDel.patientID).subscribe
  (
        () => {
          this.patients = this.patients.filter((patient) => patient.patientID !== patientDel.patientID);
          this.table.renderRows();
        }
      )}
}
