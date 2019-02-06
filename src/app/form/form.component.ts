import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  dob = new FormControl('', [Validators.required]);

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter an email.' :
        this.email.hasError('email') ? 'Invalid email! Email should be valid.' :
            '';
  }
  getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name.' :
            '';
  }
  getDOBErrorMessage() {
    return this.dob.hasError('required') ? 'You must pick a date of birth.' :
            '';
  }

}
