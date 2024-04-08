import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtema3Component } from './subtema3.component';

describe('Subtema3Component', () => {
  let component: Subtema3Component;
  let fixture: ComponentFixture<Subtema3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subtema3Component]
    });
    fixture = TestBed.createComponent(Subtema3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
