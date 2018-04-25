import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoderadoComunicadoComponent } from './apoderado-comunicado.component';

describe('ApoderadoComunicadoComponent', () => {
  let component: ApoderadoComunicadoComponent;
  let fixture: ComponentFixture<ApoderadoComunicadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoderadoComunicadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoderadoComunicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
