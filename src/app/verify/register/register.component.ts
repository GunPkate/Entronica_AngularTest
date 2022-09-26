import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData =  {
    username: '',
    password: '',
    fullname: '',
    age: '',
    mobile:'',
    email: '',
  }

  isSubmitted = false
  constructor() { }

  ngOnInit(): void {
  }

  ngSubmit(registrationForm: NgForm) : void{
    this.isSubmitted = true;
    if(registrationForm.invalid) {
      alert('Register fail');
      return 
    }
    else {
      alert('Register Success'
      );}
  }

  
}
