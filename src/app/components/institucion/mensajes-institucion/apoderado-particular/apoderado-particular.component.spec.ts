import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoderadoParticularComponent } from './apoderado-particular.component';

describe('ApoderadoParticularComponent', () => {
  let component: ApoderadoParticularComponent;
  let fixture: ComponentFixture<ApoderadoParticularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoderadoParticularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoderadoParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
