import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string | undefined;
  password : string = ""

  constructor( private router:Router) {  }

  ngOnInit(): void {
  }

  onSubmit(): void { 
    alert(this.username+": success");
    this.router.navigate(['/user/user-list'])
  }

  onSignUp(): void {
    this.router.navigate(['verify/register'])
  }

  

}
