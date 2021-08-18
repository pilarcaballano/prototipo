import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoResultadoComponent } from './dato-resultado.component';

describe('DatoResultadoComponent', () => {
  let component: DatoResultadoComponent;
  let fixture: ComponentFixture<DatoResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatoResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatoResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
