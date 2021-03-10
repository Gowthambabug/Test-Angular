import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserformComponent } from './userform.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
    {
      path: 'UserForm',
      component: UserformComponent
    },
  ]
@NgModule({
    declarations: [
        UserformComponent
    ],
    imports: [CommonModule,RouterModule.forChild(routes),FormsModule],
    providers: []
  
  })
export class UserFormModule { }