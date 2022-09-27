import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ea-user-list',
  templateUrl: './ea-user-list.component.html',
  styleUrls: ['./ea-user-list.component.css']
})
export class EaUserListComponent implements OnInit {
  
  @Input()
  users: User[] = [];
  @Input()
  selectedUser: User | undefined;
  userShow: boolean = false;  
  @Output()
  onSelectUser: EventEmitter<User> = new EventEmitter<User>(); 

  // constructor(private userService:UserService) { }
  constructor() { }
  
  ngOnInit(): void {
    // this.users = this.userService.getAllUsers();
    // this.users = this.getAllUser4();
  }

  onSelect(user:User): void{
    if(!this.userShow){
      // this.selectedUser = user;
      this.onSelectUser.emit(user);
    }
    //else if(this.userShow){
    //   this.selectedUser = undefined;
    // }
  }
  
  // getAllUser4(): User[]{
  //   return [
  //     {
  //       id: '1',
  //       name: 'g',
  //       email: 'g@gmail.com',
  //       phone: '0832224545',
  //       age: 18,
  //       isActive: true
  //     },
  //     {
  //       id: '2',
  //       name: 'g2',
  //       email: 'g2@gmail.com',
  //       phone: '0832224845',
  //       age: 18,
  //       isActive: true
  //     },
  //     {
  //       id: '3',
  //       name: 'g3',
  //       email: 'g3@gmail.com',
  //       phone: '0832224849',
  //       age: 18,
  //       isActive: true
  //     },
  //     {
  //       id: '4',
  //       name: 'f',
  //       email: 'f@gmail.com',
  //       phone: '0832224849',
  //       age: 18,
  //       isActive: true
  //     }
  //   ];
  // }


}
