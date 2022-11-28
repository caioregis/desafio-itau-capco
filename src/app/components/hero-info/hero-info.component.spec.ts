import { heroesServiceStub } from './../../../tests/stubs/heroes-service-stub';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInfoComponent } from './hero-info.component';

describe('HeroInfoComponent', () => {
  let component: HeroInfoComponent;
  let fixture: ComponentFixture<HeroInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroInfoComponent ],
      providers: [heroesServiceStub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
