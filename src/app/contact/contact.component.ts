import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: String = '';
  email: String = '';
  message: String = '';
  name_error: String = '';
  email_error: String = '';
  message_error: String = '';
  constructor() { }

  ngOnInit() {
  }

  validateForm() {
    let email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.name === '' || this.name === ' ') {
      this.name_error = 'Name is required';
    } else {
      this.name_error = '';
    }
    if (this.email === '') {
      this.email_error = 'E-mail address is required';
    } else if (!this.email.match(email_regex)) {
      this.email_error = 'E-mail address is invalid';
    } else {
      this.email_error = '';
    }
  }
}
