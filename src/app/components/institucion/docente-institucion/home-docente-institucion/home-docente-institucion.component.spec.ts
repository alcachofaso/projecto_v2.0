import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDocenteInstitucionComponent } from './home-docente-institucion.component';

describe('HomeDocenteInstitucionComponent', () => {
  let component: HomeDocenteInstitucionComponent;
  let fixture: ComponentFixture<HomeDocenteInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDocenteInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDocenteInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
