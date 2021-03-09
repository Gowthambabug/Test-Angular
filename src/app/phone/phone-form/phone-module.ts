import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneFormComponent } from './phone-form.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
    {
      path: 'PhoneForm',
      component: PhoneFormComponent
    },
  ]
@NgModule({
    declarations: [
        PhoneFormComponent
    ],
    imports: [CommonModule,RouterModule.forChild(routes),FormsModule],
    providers: []
  
  })
export class PhoneModule { }