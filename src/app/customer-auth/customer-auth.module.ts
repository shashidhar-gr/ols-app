import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerForgotPasswordComponent } from './customer-forgot-password/customer-forgot-password.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerLoginComponent, CustomerForgotPasswordComponent],
  exports: [CustomerLoginComponent]
})
export class CustomerAuthModule { }
