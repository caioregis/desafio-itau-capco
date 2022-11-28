import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { apiServiceStub } from 'src/tests/stubs/api-service-stub';

import { ApiService } from './api.service';
import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HeroesService;
  let apiService: ApiService;

  let hero: Hero;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesService, apiServiceStub]
    });
    service = TestBed.inject(HeroesService);
    apiService = TestBed.inject(ApiService);
    hero = { name: '' } as Hero;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getHeroes', () => {
    spyOn(apiService, 'getHeroes').and.returnValue(of([hero]));
    let expected: Hero[] = [];
    service.getHeroes();
    service.heroes$.subscribe(h => expected = h);
    expect(expected).toEqual([hero]);
  });

  it('should setHero - EMPTY mappers', () => {
    let expected: any = {
      name: '',
      slug: '',
      img: '',
      powerstats: [{ name: '', series: [] }],
      works: [],
      groupsAffiliation: [],
      relatives: []
    };
    service.setHero(hero);
    let expectReturn;
    service.heroSelected$.subscribe(h => expectReturn = h);
    expect(expectReturn).toEqual(expected);
  });

  it('should setHero - COMPLETE mappers', () => {
    let expected: any = {
      name: "A-Bomb",
      slug: "1-a-bomb",
      img: 'image md',
      powerstats: [{
        name: 'A-Bomb',
        series: [
          {name: 'Combat', value: 64},
          {name: 'Durability', value: 80},
          {name: 'Intelligence', value: 38},
          {name: 'Power', value: 24},
          {name: 'Speed', value: 17},
          {name: 'Strength', value: 100},
        ]
      }],
      works: ['occupation 1', ' occupation 2'],
      groupsAffiliation: ['groupAffiliation 1', ' groupAffiliation 2'],
      relatives: ['relatives 1', ' relatives 2']
    };
    hero = {
      name: "A-Bomb",
      slug: "1-a-bomb",
      powerstats: {
        intelligence: 38,
        strength: 100,
        speed: 17,
        durability: 80,
        power: 24,
        combat: 64
      },
      images: {
        md: 'image md'
      } as Images,
      work: {
        occupation: 'occupation 1; occupation 2',
        base: ''
      },
      connections: {
        groupAffiliation: 'groupAffiliation 1; groupAffiliation 2',
        relatives: 'relatives 1; relatives 2'
      }
    } as Hero;
    service.setHero(hero);
    let expectReturn;
    service.heroSelected$.subscribe(h => expectReturn = h);
    expect(expectReturn).toEqual(expected);
  });
});
