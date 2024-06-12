import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { clientesResolver } from './clientes.resolver';

describe('clientesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => clientesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
