import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-ea-user-detail',
  templateUrl: './ea-user-detail.component.html',
  styleUrls: ['./ea-user-detail.component.css']
})
export class EaUserDetailComponent implements OnInit {

  @Input()
  selectedUser: User | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
