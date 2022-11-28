import { Component } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss']
})
export class HeroInfoComponent {
  heroSelected$ = this.heroesService.heroSelected$;

  constructor(private heroesService: HeroesService) {
  }
}
