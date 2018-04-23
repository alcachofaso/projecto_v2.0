import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloCursoComponent } from './solo-curso.component';

describe('SoloCursoComponent', () => {
  let component: SoloCursoComponent;
  let fixture: ComponentFixture<SoloCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
