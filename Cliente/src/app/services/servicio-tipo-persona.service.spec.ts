import { TestBed } from '@angular/core/testing';

import { ServicioTipoPersonaService } from './servicio-tipo-persona.service';

describe('ServicioTipoPersonaService', () => {
  let service: ServicioTipoPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTipoPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
