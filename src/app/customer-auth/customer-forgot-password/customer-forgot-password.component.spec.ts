import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerForgotPasswordComponent } from './customer-forgot-password.component';

describe('CustomerForgotPasswordComponent', () => {
  let component: CustomerForgotPasswordComponent;
  let fixture: ComponentFixture<CustomerForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
