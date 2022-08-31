import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorAltaComponent } from './trabajador-alta.component';

describe('TrabajadorAltaComponent', () => {
  let component: TrabajadorAltaComponent;
  let fixture: ComponentFixture<TrabajadorAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadorAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
