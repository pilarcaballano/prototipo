import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActasComponent } from './detalle-actas.component';

describe('DetalleActasComponent', () => {
  let component: DetalleActasComponent;
  let fixture: ComponentFixture<DetalleActasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleActasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleActasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
