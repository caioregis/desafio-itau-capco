import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes$ = new BehaviorSubject<Hero[]>([]);

  constructor(
    private api: ApiService
  ) { }

  getHeroes() {
    return this.api.getHeroes()
      .pipe(
        tap((heroes) => this.heroes$.next(heroes))
      ).subscribe();
  }
}
