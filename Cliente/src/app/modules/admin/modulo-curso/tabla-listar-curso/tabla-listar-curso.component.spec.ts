import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListarCursoComponent } from './tabla-listar-curso.component';

describe('TablaListarCursoComponent', () => {
  let component: TablaListarCursoComponent;
  let fixture: ComponentFixture<TablaListarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaListarCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaListarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
