import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = "";
  password : string = "";

  constructor( private router:Router, private UserService:UserService) {  }

  ngOnInit(): void {
  }

  onSubmit(): void { 
    // alert(this.username+": success");
    this.UserService.loginUsers(this.username, this.password).subscribe(data=>{
      console.log(data)
      if(data.resultCode === 200){
        this.router.navigate(['/user/user-list'])
      }else{
        alert("Invalid user")
      }
    });
 
  }

  onSignUp(): void {
    this.router.navigate(['verify/register'])
  }

  

}
