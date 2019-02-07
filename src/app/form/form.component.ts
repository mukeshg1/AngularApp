import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  dataList = [];
  constructor() { }

  ngOnInit() {
    this.dataList=[{name: 'Amit Rastogi', address: 'Banglore', dob: '2/1/2019', email: 'amit@email.com'},
    {name: 'Birodh Basnet', address: 'Bhubaneswar', dob: '2/1/2019', email: 'birodh@email.com'},
    {name: 'Chandra Adhikari', address: 'Chennai', dob: '1/24/2019', email: 'chandra@email.com'},
    {name: 'Devasis Das', address: 'Kathmandu', dob: '1/24/2019', email: 'dev@email.com'}
  
  ]
  }


  email = new FormControl('', [Validators.required, Validators.email]);
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
      }
    )
  }

}
