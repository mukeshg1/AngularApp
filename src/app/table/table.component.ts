import { Component, OnInit } from '@angular/core';
import { FormdataService } from '../services/formdata.service';
import { formdata } from '../models/formdata';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  FormData: formdata[];

  constructor(private formdataService:FormdataService) { 
    
  }

  ngOnInit() {

    this.formdataService.getFormdata().subscribe(FormData => {
      this.FormData = FormData;
    })
  }
  displayedColumns = ['name', 'address', 'dob', 'email'];

}
