import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtema1Component } from './subtema1.component';

describe('Subtema1Component', () => {
  let component: Subtema1Component;
  let fixture: ComponentFixture<Subtema1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subtema1Component]
    });
    fixture = TestBed.createComponent(Subtema1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
