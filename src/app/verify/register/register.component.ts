import { UserService } from 'src/app/services/user.service';
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
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  ngSubmit(registrationForm: NgForm) : void{
    this.isSubmitted = true;
    try {
      
      if(!registrationForm.invalid) {
        this.userService.registerUsers(this.registerData).subscribe(data =>{
          console.log(this.registerData)
          console.log(data)
          if(data.resultCode !== 40900)
          alert('Register Success')
          else{alert('Register fail');}
        });
      }
      else {
        alert('Register fail');
        return 
      }

      
    } catch (error) {
      alert('Register fail');
    }


    
  }

  
}
