import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtema4Component } from './subtema4.component';

describe('Subtema4Component', () => {
  let component: Subtema4Component;
  let fixture: ComponentFixture<Subtema4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Subtema4Component]
    });
    fixture = TestBed.createComponent(Subtema4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
