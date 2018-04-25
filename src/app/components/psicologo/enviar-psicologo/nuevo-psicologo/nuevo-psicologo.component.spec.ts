import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPsicologoComponent } from './nuevo-psicologo.component';

describe('NuevoPsicologoComponent', () => {
  let component: NuevoPsicologoComponent;
  let fixture: ComponentFixture<NuevoPsicologoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPsicologoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
