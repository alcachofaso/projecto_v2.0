import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesPsicopedaComponent } from './mensajes-psicopeda.component';

describe('MensajesPsicopedaComponent', () => {
  let component: MensajesPsicopedaComponent;
  let fixture: ComponentFixture<MensajesPsicopedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesPsicopedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesPsicopedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
