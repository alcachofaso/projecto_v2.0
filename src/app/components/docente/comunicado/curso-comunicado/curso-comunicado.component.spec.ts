import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoComunicadoComponent } from './curso-comunicado.component';

describe('CursoComunicadoComponent', () => {
  let component: CursoComunicadoComponent;
  let fixture: ComponentFixture<CursoComunicadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoComunicadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoComunicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
