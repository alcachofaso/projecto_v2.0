import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteInstitucionComponent } from './docente-institucion.component';

describe('DocenteInstitucionComponent', () => {
  let component: DocenteInstitucionComponent;
  let fixture: ComponentFixture<DocenteInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
