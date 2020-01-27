import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoginComponent } from './customer-login/customer-login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerLoginComponent]
})
export class CustomerAuthModule { }
