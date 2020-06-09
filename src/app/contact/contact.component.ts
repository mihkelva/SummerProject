import { Contact } from './contact.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm) {
    var formValue = form.value;

    new Contact(
      formValue.name, 
      formValue.email, 
      formValue.phone, 
      formValue.subject, 
      formValue.message)
  }

}