import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzulejoComponent } from './azulejo.component';

describe('AzulejoComponent', () => {
  let component: AzulejoComponent;
  let fixture: ComponentFixture<AzulejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzulejoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzulejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
