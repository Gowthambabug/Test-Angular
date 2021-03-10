import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  Output: string;
  formData: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.Output = this.formData.firstname.toLowerCase() + "_" + this.formData.lastname.toLowerCase() + "_"
    + this.randomNumber(1,9);
  }
   randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
   }  
}
