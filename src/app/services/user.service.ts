import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]
  
  constructor() { 
    this.users = this.initMockUsers();
  }

  getAllUsers(): User[] { return this.users}

  initMockUsers(): User[]{
    return [
      {
        id: '1',
        name: 'g',
        email: 'g@gmail.com',
        phone: '0832224545',
        age: 18,
        isActive: true
      },
      {
        id: '2',
        name: 'g2',
        email: 'g2@gmail.com',
        phone: '0832224845',
        age: 18,
        isActive: true
      },
      {
        id: '3',
        name: 'g3',
        email: 'g3@gmail.com',
        phone: '0832224849',
        age: 18,
        isActive: true
      },        
    ]
  }

  getUserById(id: string): User| undefined { return this.users.find(el => el.id === id)}

  addUser(user: User):boolean {
    if(this.users.find(el => el.id === user.id)){ return false;}
    this.users.push(user)
    return true;
  }
}
