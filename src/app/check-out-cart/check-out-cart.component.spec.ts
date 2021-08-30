import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutCartComponent } from './check-out-cart.component';

describe('CheckOutCartComponent', () => {
  let component: CheckOutCartComponent;
  let fixture: ComponentFixture<CheckOutCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
