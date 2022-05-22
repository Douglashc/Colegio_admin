import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActualizarPersonaComponent } from './form-actualizar-persona.component';

describe('FormActualizarPersonaComponent', () => {
  let component: FormActualizarPersonaComponent;
  let fixture: ComponentFixture<FormActualizarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormActualizarPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActualizarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
