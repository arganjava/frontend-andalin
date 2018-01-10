import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from "../model/user";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  user: User = new User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users  = this.userService.getUsers();
  }

  save(user: User): void {
    //this.users;
  }

  edit(user: User): void {
    this.user = user;
  }

  delete(): void {
    //this.users.push(this.user);
  }

}
