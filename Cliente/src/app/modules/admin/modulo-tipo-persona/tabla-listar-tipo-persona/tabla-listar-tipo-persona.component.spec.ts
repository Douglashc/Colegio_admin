import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListarTipoPersonaComponent } from './tabla-listar-tipo-persona.component';

describe('TablaListarTipoPersonaComponent', () => {
  let component: TablaListarTipoPersonaComponent;
  let fixture: ComponentFixture<TablaListarTipoPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaListarTipoPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaListarTipoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
