import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDocumentoComponent } from './informacion-documento.component';

describe('InformacionDocumentoComponent', () => {
  let component: InformacionDocumentoComponent;
  let fixture: ComponentFixture<InformacionDocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionDocumentoComponent]
    });
    fixture = TestBed.createComponent(InformacionDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
