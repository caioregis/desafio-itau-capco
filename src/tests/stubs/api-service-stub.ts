import { FactoryProvider } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

export const apiServiceStub: FactoryProvider = ({
  provide: ApiService,
  useFactory: () => ({
    getHeroes: () => {},
  })
});
