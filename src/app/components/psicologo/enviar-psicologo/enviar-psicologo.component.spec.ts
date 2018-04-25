import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarPsicologoComponent } from './enviar-psicologo.component';

describe('EnviarPsicologoComponent', () => {
  let component: EnviarPsicologoComponent;
  let fixture: ComponentFixture<EnviarPsicologoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarPsicologoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
