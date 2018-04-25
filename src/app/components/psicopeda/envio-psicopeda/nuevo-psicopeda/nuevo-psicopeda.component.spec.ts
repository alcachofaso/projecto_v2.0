import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPsicopedaComponent } from './nuevo-psicopeda.component';

describe('NuevoPsicopedaComponent', () => {
  let component: NuevoPsicopedaComponent;
  let fixture: ComponentFixture<NuevoPsicopedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPsicopedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPsicopedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
