import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListarPersonaComponent } from './tabla-listar-persona.component';

describe('TablaListarPersonaComponent', () => {
  let component: TablaListarPersonaComponent;
  let fixture: ComponentFixture<TablaListarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaListarPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaListarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
