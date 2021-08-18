import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaOrdenServicioComponent } from './consulta-orden-servicio.component';

describe('ConsultaOrdenServicioComponent', () => {
  let component: ConsultaOrdenServicioComponent;
  let fixture: ComponentFixture<ConsultaOrdenServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaOrdenServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaOrdenServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
