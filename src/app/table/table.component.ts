import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private _formData: FormComponent) { 
    
  }

  ngOnInit() {
  }
  displayedColumns = ['name', 'address', 'dob', 'email'];
  dataSource = ELEMENT_DATA;

}
export interface FormData {
  address: string;
  name: string;
  dob: string;
  email: string;
}

const ELEMENT_DATA: FormData[] = [
  {name: 'Amit Rastogi', address: 'Banglore', dob: '2/1/2019', email: 'amit@email.com'},
  {name: 'Birodh Basnet', address: 'Bhubaneswar', dob: '2/1/2019', email: 'birodh@email.com'},
  {name: 'Chandra Adhikari', address: 'Chennai', dob: '1/24/2019', email: 'chandra@email.com'},
  {name: 'Devasis Das', address: 'Kathmandu', dob: '1/24/2019', email: 'dev@email.com'},
  {name: 'Ellen DeGeneres', address: 'Biratnagar', dob: '1/24/2019', email: 'ellen@email.com'},
  {name: 'Forrest Gump', address: 'Lahan', dob: '11/24/2019', email: 'forrest@email.com'},
  {name: 'Gourav Padhi', address: 'Pokhara', dob: '1/24/2019', email: 'gourav@email.com'},
  {name: 'Harry Kane', address: 'Namche Bazar', dob: '1/24/2019', email: 'harry@email.com'}
];