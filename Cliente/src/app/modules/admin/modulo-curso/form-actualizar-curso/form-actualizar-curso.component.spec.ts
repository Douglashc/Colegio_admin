import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActualizarCursoComponent } from './form-actualizar-curso.component';

describe('FormActualizarCursoComponent', () => {
  let component: FormActualizarCursoComponent;
  let fixture: ComponentFixture<FormActualizarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormActualizarCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActualizarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
