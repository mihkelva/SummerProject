import { FaqService } from './../faq.service';
import { Contact } from './contact.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FaqItem } from '@angular-material-extensions/faq';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  list: FaqItem[] = [];
  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.list = this.faqService.getFaqItems();
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
