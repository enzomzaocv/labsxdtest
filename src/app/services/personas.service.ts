import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { data } from '../../assets/Personas.js';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  //url:string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  /* getPersonas():Observable<any[]> {
    return this.http.get<any[]>(this.url);
  } */

  getPersonas(){
    return JSON.parse(JSON.stringify(data))
  }
}
