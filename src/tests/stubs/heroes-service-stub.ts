import { BehaviorSubject } from 'rxjs';
import { FactoryProvider } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

export const heroesObs$ = new BehaviorSubject(null);
export const heroSelectedObs$ = new BehaviorSubject(null);

export const heroesServiceStub: FactoryProvider = ({
  provide: HeroesService,
  useFactory: () => ({
    heroes$: heroesObs$.asObservable(),
    heroSelected$: heroSelectedObs$.asObservable(),
    getHeroes: () => {},
    setHero: () => {}
  })
});
