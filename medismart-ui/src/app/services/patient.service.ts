import { IPatient } from './../models/patient';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  httpOptions ={
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  url:string ="http://localhost:24584/api/Patients";

  constructor(private http:HttpClient) {     
  }

  getPatients(): Observable<IPatient[]> {
    return this.http.get<IPatient[]>(`${this.url}`);    
  }

  getPatientById(patientId: number): Observable<IPatient>{
    return this.http.get<IPatient>(`${this.url}/${patientId}`);  
  }
  
  addNewPatient(newPatient:any):Observable<IPatient>{    
    return this.http.post<IPatient>(this.url, newPatient, this.httpOptions);
  }

  
  editPatient(patientId:number, patient:IPatient) : Observable<any> {
    patient.patientID = patientId;
     return this.http.put(`${this.url}/${patientId}`, patient, this.httpOptions);
  }
  
  deletePatient(patient: IPatient): Observable<IPatient> {
    return this.http.delete<IPatient>(`${this.url}/${patient.patientID}`, this.httpOptions)
        .pipe(
            catchError(this.handleError)
        );
  }
  deletePat(id: number): Observable<{}> {
    const url = `${this.url}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  
  handleError(err: HttpErrorResponse){
    let errorMsg= ' ';

    if(err.error instanceof ErrorEvent) {
        //client side or network error
        errorMsg = `An error occured: ${err.error.message}`;
    } else {
        //the backend returned an unsuccessful error code
        errorMsg = `Server returned code: ${err.status}, text ${err.statusText}, error message is ${err.message}`;
    }
    console.error(errorMsg);
    return throwError(errorMsg);
  }
}

