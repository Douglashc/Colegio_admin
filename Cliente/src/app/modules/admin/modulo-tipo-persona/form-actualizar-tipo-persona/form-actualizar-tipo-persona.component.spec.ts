import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActualizarTipoPersonaComponent } from './form-actualizar-tipo-persona.component';

describe('FormActualizarTipoPersonaComponent', () => {
  let component: FormActualizarTipoPersonaComponent;
  let fixture: ComponentFixture<FormActualizarTipoPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormActualizarTipoPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActualizarTipoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
