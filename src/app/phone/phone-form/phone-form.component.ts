import { Component, OnInit } from '@angular/core';
import { PhoneBook } from './phonebook.model';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  formData: any = {
    firstname : "Coder",
    lastname :"Byte",
    phone :8885559999
  };
  PhoneBookList: PhoneBook[] = [];
  PhoneBookObj: PhoneBook;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.PhoneBookObj = new PhoneBook();
    this.PhoneBookObj.firstnamelist = this.formData.firstname;
    this.PhoneBookObj.lastnamelist = this.formData.lastname;
    this.PhoneBookObj.phonelist = this.formData.phone;
    this.PhoneBookList.push(this.PhoneBookObj);
    this.PhoneBookList = this.PhoneBookList.sort((a, b) => (a.lastnamelist < b.lastnamelist ? -1 : 1));
  }

}


