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
      username: ['a',[Validators.required]],
      password: ['a',[Validators.required]],
      phone: ['0832224645',[Validators.required,Validators.pattern('^(0)[6-9]{1}[0-9]{8}|^(999)\d{7}')]],
      email: ['gm@gmail.com',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    })
   }
    
  ngOnInit(): void {
  }

  onSubmit(): void{
    this.isSubmitted = true;
    if(this.registrationForm.invalid){
      alert('failed')
      return;
    }else{
      console.log(this.registrationForm)
    }
  }
}
