import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-component',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

}
