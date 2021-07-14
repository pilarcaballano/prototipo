import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPdtsComponent } from './solicitudes-pdts.component';

describe('SolicitudesPdtsComponent', () => {
  let component: SolicitudesPdtsComponent;
  let fixture: ComponentFixture<SolicitudesPdtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPdtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPdtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
