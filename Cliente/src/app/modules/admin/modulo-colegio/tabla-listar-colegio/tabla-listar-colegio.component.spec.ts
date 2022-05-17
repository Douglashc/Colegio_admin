import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListarColegioComponent } from './tabla-listar-colegio.component';

describe('TablaListarColegioComponent', () => {
  let component: TablaListarColegioComponent;
  let fixture: ComponentFixture<TablaListarColegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaListarColegioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaListarColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
