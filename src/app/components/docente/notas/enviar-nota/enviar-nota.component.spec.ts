import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarNotaComponent } from './enviar-nota.component';

describe('EnviarNotaComponent', () => {
  let component: EnviarNotaComponent;
  let fixture: ComponentFixture<EnviarNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
