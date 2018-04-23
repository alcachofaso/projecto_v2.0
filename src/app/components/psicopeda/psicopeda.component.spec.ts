import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicopedaComponent } from './psicopeda.component';

describe('PsicopedaComponent', () => {
  let component: PsicopedaComponent;
  let fixture: ComponentFixture<PsicopedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsicopedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicopedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
