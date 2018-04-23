import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoInstitucionComponent } from './curso-institucion.component';

describe('CursoInstitucionComponent', () => {
  let component: CursoInstitucionComponent;
  let fixture: ComponentFixture<CursoInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
