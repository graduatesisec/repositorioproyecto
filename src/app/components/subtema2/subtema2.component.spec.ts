import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtema2Component } from './subtema2.component';

describe('Subtema2Component', () => {
  let component: Subtema2Component;
  let fixture: ComponentFixture<Subtema2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subtema2Component]
    });
    fixture = TestBed.createComponent(Subtema2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
