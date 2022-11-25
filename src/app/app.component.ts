import { Component, OnInit } from '@angular/core';

import { HeroesService } from './services/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'desafio-itau-capco';

  heroes$ = this.heroesService.heroes$;


  //table
  page = 1;
  pageSize = 10;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes();
  }

}
