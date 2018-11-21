import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user-service/user.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: UserModel[];
  username: any;
  email: any;
  password: any;
  first_name: any;
  last_name: any;
  is_superuser: any;
  is_staff: any;
  active: any;
  lock: any;
  n: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.userService.getItems().subscribe(
      users => {
        this.users = users;
      },
      err => {
        console.log(err);
      }
    );
  }

  eSubmit(event) {
    event.preventDefault();
    const newUser: UserModel = {
      username: this.username,
      email: this.email,
      password: this.password,
      first_name: this.first_name,
      last_name: this.last_name,
      is_superuser: this.is_superuser,
      is_staff: this.is_staff,
      active: this.active,
      lock: this.lock,
      created_at: new Date(),
      updated_at: new Date()
    };
    this.userService.addItem(newUser).subscribe(user => {
      this.users.push(user);
      console.log('User created');
    });
  }

  deleteItem(id) {
    const response = confirm('Are you sure to delete it?');
    if (response) {
      this.userService.deleteItem(id).subscribe(data => {
        if (data.n === 1) {
          for (let i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === id) {
              this.users.splice(i, 1);
            }
          }
        }
      });
    }
    return;
  }
}
