import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarTareaComponent } from './enviar-tarea.component';

describe('EnviarTareaComponent', () => {
  let component: EnviarTareaComponent;
  let fixture: ComponentFixture<EnviarTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
