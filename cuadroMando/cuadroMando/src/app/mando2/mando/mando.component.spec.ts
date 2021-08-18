import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandoComponent } from './mando.component';

describe('MandoComponent', () => {
  let component: MandoComponent;
  let fixture: ComponentFixture<MandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
