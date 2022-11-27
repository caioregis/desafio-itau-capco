import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent {

  heroes$ = this.heroesService.heroes$
    .pipe(
      tap(([ firstHero, ...others ]) => {
        this.setHero(firstHero);
        this.pageTotal = Math.round((others.length + 1) /10);
      })
    );

  page = 1;
  pageSize = 10;
  pageTotal = 0;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes();
  }

  setHero(hero: Hero) {
    this.heroesService.setHero(hero);
  }

  setPage(page: number) {
    this.page = page;
  }
}
