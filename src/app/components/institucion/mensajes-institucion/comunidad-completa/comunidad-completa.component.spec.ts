import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadCompletaComponent } from './comunidad-completa.component';

describe('ComunidadCompletaComponent', () => {
  let component: ComunidadCompletaComponent;
  let fixture: ComponentFixture<ComunidadCompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadCompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
