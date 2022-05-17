import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrarColegioComponent } from './form-registrar-colegio.component';

describe('FormRegistrarColegioComponent', () => {
  let component: FormRegistrarColegioComponent;
  let fixture: ComponentFixture<FormRegistrarColegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistrarColegioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistrarColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
