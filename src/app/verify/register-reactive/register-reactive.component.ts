import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css']
})
export class RegisterReactiveComponent implements OnInit {

  registrationForm: FormGroup 

  isSubmitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
      email: ['',[Validators.required]],
    })
   }
    
  ngOnInit(): void {
  }

  onSubmit(): void{
    this.isSubmitted = true;
    console.log(this.registrationForm)
  }
}
