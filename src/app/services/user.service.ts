import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUser, User,RequestUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]
  
  constructor(private http: HttpClient) { 
    this.users = this.initMockUsers();
  }

  // getAllUsers(): User[] { return this.users}
  // getAllUsers(): Observable<User[]> { return this.http.get<User[]>('https://631dea1dcc652771a48dcb2a.mockapi.io/api/users')}
  getAllUsers(): Observable<ResponseUser> { return this.http.get<ResponseUser>('http://localhost:3000/api/user/getall')}
  loginUsers(email:string, password:string): Observable<ResponseUser> { 
    const body = {email: email , password: password}
    return this.http.post<ResponseUser>('http://localhost:3000/api/user/login',body )
  }

  registerUsers(email:string, password:string): Observable<ResponseUser> { 
    const body = {email: email , password: password}
    return this.http.post<ResponseUser>('http://localhost:3000/api/user/login',body )
  }


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
