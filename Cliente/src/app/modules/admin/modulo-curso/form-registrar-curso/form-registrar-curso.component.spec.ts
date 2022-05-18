import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrarCursoComponent } from './form-registrar-curso.component';

describe('FormRegistrarCursoComponent', () => {
  let component: FormRegistrarCursoComponent;
  let fixture: ComponentFixture<FormRegistrarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistrarCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistrarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
