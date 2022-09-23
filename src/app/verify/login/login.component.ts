import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string | undefined;
  password : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void { alert(this.username+": success");}

  

}
