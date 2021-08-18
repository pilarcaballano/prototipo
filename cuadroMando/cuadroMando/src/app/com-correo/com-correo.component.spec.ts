import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComCorreoComponent } from './com-correo.component';

describe('ComCorreoComponent', () => {
  let component: ComCorreoComponent;
  let fixture: ComponentFixture<ComCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComCorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
