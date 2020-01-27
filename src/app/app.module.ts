import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerAuthComponent } from './customer-login/customer-auth/customer-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAuthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
