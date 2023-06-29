import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal } from '../interfaces/Animal';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private apiUrl = "http://localhost:3000/animals"

  constructor(private http:HttpClient) { }

  getAll():Observable<Animal[]>
  {
    return this.http.get<Animal[]>(this.apiUrl)
  }
}
