import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonajeService {
  url = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getAll(page: number = 1): Observable<any> {
    return this.http.get(`${this.url}/?page=${page}`);
  }
}
