import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrarTipoPersonaComponent } from './form-registrar-tipo-persona.component';

describe('FormRegistrarTipoPersonaComponent', () => {
  let component: FormRegistrarTipoPersonaComponent;
  let fixture: ComponentFixture<FormRegistrarTipoPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistrarTipoPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistrarTipoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
