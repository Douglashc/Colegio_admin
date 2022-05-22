import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrarPersonaComponent } from './form-registrar-persona.component';

describe('FormRegistrarPersonaComponent', () => {
  let component: FormRegistrarPersonaComponent;
  let fixture: ComponentFixture<FormRegistrarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistrarPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistrarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
