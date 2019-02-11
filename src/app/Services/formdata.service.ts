import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { formdata } from '../models/formdata';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FormdataService {

  formdataUrl:string = 'https://my-json-server.typicode.com/mukeshg1/AngularApp/users';

  constructor(private http:HttpClient) { }

  //Get FormData

  getFormdata():Observable<formdata[]>{
    return this.http.get<formdata[]>(this.formdataUrl);
  }
}
