import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesEncontradasComponent } from './publicaciones-encontradas.component';

describe('PublicacionesEncontradasComponent', () => {
  let component: PublicacionesEncontradasComponent;
  let fixture: ComponentFixture<PublicacionesEncontradasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicacionesEncontradasComponent]
    });
    fixture = TestBed.createComponent(PublicacionesEncontradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
