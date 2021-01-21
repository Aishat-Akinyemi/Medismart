
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordComponent } from "./components/record/record.component";
import { RegistrationFormComponent } from './components/registation/registration-form.component';

const routes: Routes = [
  {path:'records', component:RecordComponent},
  {path:'registrationForm', component: RegistrationFormComponent},
  { path: '', redirectTo:'/registrationForm', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
