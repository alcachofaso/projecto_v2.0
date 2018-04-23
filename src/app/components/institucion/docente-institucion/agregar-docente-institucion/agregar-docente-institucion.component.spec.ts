import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDocenteInstitucionComponent } from './agregar-docente-institucion.component';

describe('AgregarDocenteInstitucionComponent', () => {
  let component: AgregarDocenteInstitucionComponent;
  let fixture: ComponentFixture<AgregarDocenteInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarDocenteInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDocenteInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
