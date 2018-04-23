import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteInstitucionComponent } from './estudiante-institucion.component';

describe('EstudianteInstitucionComponent', () => {
  let component: EstudianteInstitucionComponent;
  let fixture: ComponentFixture<EstudianteInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
