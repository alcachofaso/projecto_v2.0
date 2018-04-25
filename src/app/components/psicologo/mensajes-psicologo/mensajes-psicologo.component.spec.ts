import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesPsicologoComponent } from './mensajes-psicologo.component';

describe('MensajesPsicologoComponent', () => {
  let component: MensajesPsicologoComponent;
  let fixture: ComponentFixture<MensajesPsicologoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesPsicologoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
