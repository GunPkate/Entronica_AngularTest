
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  selectedUser: User | undefined;
  userShow: boolean = false;  

  constructor(private userService:UserService) { }
  
  ngOnInit(): void {
    // this.users = this.userService.getAllUsers();
    // this.users = this.getAllUser4();
    // this.userService.getAllUsers().subscribe(data => {this.users = data})
    try {
      this.userService.getAllUsers().subscribe(data => {
        console.log(data.resultCode);
        
        if(data.resultCode === 20000){
          // for(let i = 0; i < data.data.length; i++) {
          //   console.log(i)
          //   data.data[i].isActive = true;
          //   this.users.push(data.data[i]);
          //   this.users[i].name = this.users[i].name;
          // }
          for (const user of data.data) {
            // console.log(user);
            this.users.push({
              isActive: true,
              id: user._id,
              name: user.username,
              email: user.email,
              phone: user.phone,
              age: user.age
            })
          }
        }
        console.log(this.users);
        
        // data.
      })
    } catch (error) {
      console.log(error)
    }
  }

  onSelect(user:User): void{
    if(!this.userShow){
      this.selectedUser = user;
    }else if(this.userShow){
      this.selectedUser = undefined;
    }
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
