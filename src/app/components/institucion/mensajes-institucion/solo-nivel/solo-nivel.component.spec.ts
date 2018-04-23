import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloNivelComponent } from './solo-nivel.component';

describe('SoloNivelComponent', () => {
  let component: SoloNivelComponent;
  let fixture: ComponentFixture<SoloNivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloNivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
