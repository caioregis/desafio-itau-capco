import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should to load heroes and return success', fakeAsync(() => {
    const response: Hero[] = [{
      id: 1,
      name: "A-Bomb",
      slug: "1-a-bomb",
      powerstats: {
        intelligence: 38,
        strength: 100,
        speed: 17,
        durability: 80,
        power: 24,
        combat: 64
      }
    } as any];
    const header: Partial<HttpResponse<any>> = {
      status: 200,
      statusText: 'OK',
    };

    let expected: Hero[] = [];
    service.getHeroes().subscribe(h => expected = h);

    http.expectOne(`https://akabab.github.io/superhero-api/api/all.json`).flush(response, header);

    expect(expected).toEqual(response);
  }));
});
