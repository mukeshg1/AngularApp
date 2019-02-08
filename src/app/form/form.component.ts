import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  dataList = [];
  constructor() { }

  ngOnInit() {
    this.dataList=[{name: 'Amit Rastogi', addr: 'Banglore', dob: 'Fri Feb 01 2019 00:00:00 GMT+0530 (India Standard Time)', email: 'amit@email.com'},
    {name: 'Birodh Basnet', addr: 'Bhubaneswar', dob: 'Fri Feb 02 2018 00:00:00 GMT+0530 (India Standard Time)', email: 'birodh@email.com'},
  
  ]
  }
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    addr: new FormControl(),
    dob: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])

    
  });


  registerUser()
  {
    this.dataList.push(
      {
        name: this.registerForm.controls['name'].value,
        email: this.registerForm.controls['email'].value,
        dob: this.registerForm.controls['dob'].value,
        addr: this.registerForm.controls['addr'].value
      });
      this.registerForm.reset();
      return this.registerForm.valid;
  }

  getNameErrorMessage() {
    return this.registerForm.controls['name'].hasError('required') ? 'You must enter a name.' :
            '';
  }

  getEmailErrorMessage() {
    return this.registerForm.controls['email'].hasError('required') ? 'You must enter an email.' :
    this.registerForm.controls['email'].hasError('email') ? 'Invalid email! Email should be valid.' :
            '';
  }

  getDOBErrorMessage() {
    return this.registerForm.controls['dob'].hasError('required') ? 'You must pick a date of birth.' :
            '';
  }
  onDelete(form){
    this.dataList = this.dataList.filter(f => f.name !== form.name);
  }









  /*email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  dob = new FormControl('', [Validators.required]);
  addr = new FormControl('');
  

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

  registerUser()
  {
    this.dataList.push(
      {
        name: this.name.value,
        email: this.email.value,
        dob: this.dob.value,
        addr: this.addr.value
      });
      return  this.name = new FormControl(''),  this.email = new FormControl(''), this.addr = new FormControl(''), this.dob = new FormControl(''), this.name.setErrors(null);
  }

  reset()
  {
    console.log('reset');
  }

  onDelete(form){
    this.dataList = this.dataList.filter(f => f.name !== form.name);
  }*/

}
