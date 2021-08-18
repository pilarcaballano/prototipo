import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoOsComponent } from './listado-os.component';

describe('ListadoOsComponent', () => {
  let component: ListadoOsComponent;
  let fixture: ComponentFixture<ListadoOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoOsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
