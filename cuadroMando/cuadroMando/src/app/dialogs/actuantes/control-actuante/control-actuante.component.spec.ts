import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlActuanteComponent } from './control-actuante.component';

describe('ControlActuanteComponent', () => {
  let component: ControlActuanteComponent;
  let fixture: ComponentFixture<ControlActuanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlActuanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlActuanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
