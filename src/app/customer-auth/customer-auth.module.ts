import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerForgotPasswordComponent } from './customer-forgot-password/customer-forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerLoginComponent, CustomerForgotPasswordComponent],
  exports: [CustomerLoginComponent, ]
})
export class CustomerAuthModule { }
