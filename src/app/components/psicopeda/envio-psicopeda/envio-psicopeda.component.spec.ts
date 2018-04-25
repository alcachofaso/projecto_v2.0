import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioPsicopedaComponent } from './envio-psicopeda.component';

describe('EnvioPsicopedaComponent', () => {
  let component: EnvioPsicopedaComponent;
  let fixture: ComponentFixture<EnvioPsicopedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvioPsicopedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioPsicopedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
