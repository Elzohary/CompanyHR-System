import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllEmployeesComponent } from './Components/all-employees/all-employees.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AllEmployeesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HRModule { }
