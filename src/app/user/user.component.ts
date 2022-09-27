import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allUser: User[] = []

  selectedUser: User | undefined
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.allUser = this.UserService.getAllUsers();
  }

  onSelect(user: User){
    this.selectedUser = user
  }
}
