import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActualizarColegioComponent } from './form-actualizar-colegio.component';

describe('FormActualizarColegioComponent', () => {
  let component: FormActualizarColegioComponent;
  let fixture: ComponentFixture<FormActualizarColegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormActualizarColegioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActualizarColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
