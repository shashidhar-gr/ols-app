import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });


  onSubmit() {
    console.log(this.loginForm.value);
  }

}
