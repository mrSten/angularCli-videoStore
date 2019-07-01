import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[];
  type: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.type = false;
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  add(name: string, type: boolean): void{
    name = name.trim();
    if(!name) { return;}
    this.userService.addUser({name, type} as User)
    .subscribe(user => {
      this.users.push(user);
    })
  }

}