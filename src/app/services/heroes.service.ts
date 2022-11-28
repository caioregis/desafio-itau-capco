import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes = new BehaviorSubject<Hero[]>([]);
  heroes$: Observable<Hero[]> = this.heroes
    .pipe(
      filter((h) => !!h.length),
    );
  heroSelected$ = new BehaviorSubject<any>(null);

  constructor(
    private api: ApiService
  ) { }

  getHeroes() {
    return this.api.getHeroes()
      .pipe(
        tap((heroes) => this.heroes.next(heroes))
      ).subscribe();
  }

  setHero(hero: Hero) {
    this.heroSelected$.next(this.mapperHeroSelected(hero));
  }

  private mapperHeroSelected(hero: Hero) {
    return {
      ...hero,
      img: hero.images.md,
      powerstats: [
        {
          name: hero.name,
          series: this.mapperSeries(hero.powerstats)
        }
      ],
      works: this.splitString(hero.work.occupation),
      groupsAffiliation: this.splitString(hero.connections.groupAffiliation),
      relatives: this.splitString(hero.connections.relatives)
    };
  }

  private splitString(value: string) {
    return value?.split(';') ?? [];
  }

  private mapperSeries(powerstats: Powerstats) {
    return [
      this.mapperSerie('Combat', powerstats.combat),
      this.mapperSerie('Durability', powerstats.durability),
      this.mapperSerie('Intelligence', powerstats.intelligence),
      this.mapperSerie('Power', powerstats.power),
      this.mapperSerie('Speed', powerstats.speed),
      this.mapperSerie('Strength', powerstats.strength),
    ]
  }

  private mapperSerie(name: string, powerstats: number) {
    return { name, value: powerstats };
  }
}
