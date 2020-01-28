import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomerAuthModule } from './customer-auth/customer-auth.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomerAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
