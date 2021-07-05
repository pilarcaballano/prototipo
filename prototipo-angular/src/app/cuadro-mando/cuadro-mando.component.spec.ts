import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroMandoComponent } from './cuadro-mando.component';

describe('CuadroMandoComponent', () => {
  let component: CuadroMandoComponent;
  let fixture: ComponentFixture<CuadroMandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroMandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroMandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
