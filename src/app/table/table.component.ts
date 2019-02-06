import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns = ['name', 'address', 'dob', 'email'];
  dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  address: string;
  name: string;
  dob: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Amit', address: 'Banglore', dob: '2/1/2019', email: 'amit@email.com'},
  {name: 'Birodh', address: 'Bhubaneswar', dob: '2/1/2019', email: 'birodh@email.com'},
  {name: 'Chandra', address: 'Chennai', dob: '1/24/2019', email: 'chandra@email.com'},
  {name: 'Dev', address: 'Kathmandu', dob: '1/24/2019', email: 'dev@email.com'},
  {name: 'Ellen', address: 'Biratnagar', dob: '1/24/2019', email: 'ellen@email.com'},
  {name: 'Forrest', address: 'Lahan', dob: '11/24/2019', email: 'forrest@email.com'},
  {name: 'Gourav', address: 'Pokhara', dob: '1/24/2019', email: 'gourav@email.com'},
  {name: 'Harry', address: 'Namche Bazar', dob: '1/24/2019', email: 'harry@email.com'},
  {name: 'Irving', address: 'Boston', dob: '1/24/2019', email: 'irving@email.com'},
  {name: 'Johnny', address: 'New Delhi', dob:'1/24/2019', email: 'johnny@email.com'},
];