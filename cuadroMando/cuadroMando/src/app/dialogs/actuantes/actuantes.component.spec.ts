import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuantesComponent } from './actuantes.component';

describe('ActuantesComponent', () => {
  let component: ActuantesComponent;
  let fixture: ComponentFixture<ActuantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
