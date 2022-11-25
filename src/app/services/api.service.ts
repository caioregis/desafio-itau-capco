import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://akabab.github.io/superhero-api/api/';

  constructor(
    private http: HttpClient
  ) { }

  getHeroes() {
    return this.http.get<Hero[]>(`${this.url}all.json`);
  }
}
