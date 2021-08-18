import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAzulejosComponent } from './listado-azulejos.component';

describe('ListadoAzulejosComponent', () => {
  let component: ListadoAzulejosComponent;
  let fixture: ComponentFixture<ListadoAzulejosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAzulejosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAzulejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
