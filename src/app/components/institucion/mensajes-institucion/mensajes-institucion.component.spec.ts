import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesInstitucionComponent } from './mensajes-institucion.component';

describe('MensajesInstitucionComponent', () => {
  let component: MensajesInstitucionComponent;
  let fixture: ComponentFixture<MensajesInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
