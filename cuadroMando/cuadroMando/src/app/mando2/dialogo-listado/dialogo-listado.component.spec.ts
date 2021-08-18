import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoListadoComponent } from './dialogo-listado.component';

describe('DialogoListadoComponent', () => {
  let component: DialogoListadoComponent;
  let fixture: ComponentFixture<DialogoListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
