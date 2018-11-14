import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user-service/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  username: string;
  lock: boolean;
  user: User;

  constructor(private userService: UserService) { }

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

  getItem(id) {
    this.userService.getItem(id).subscribe(
      user => {
        this.user = user;
      },
      err => {
        console.log(err);
      }
    );
  }

  // addItem(event) {
  //   event.preventDefault();
  //   const newUser: User = {
  //     username: this.username,
  //     lock: this.lock
  //   };
  //   this.userService.addItem(newUser).subscribe(user => {
  //     this.users.push(user);
  //     this.username = '';
  //   });
  // }

  deleteItem(id) {
    const response = confirm('Are you sure to delete it?');
    if (response) {
      const user = this.users;
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

  updateItem(user: User) {
    const newUser = {
      _id: user._id,
      username: user.username,
      lock: user.lock
    };

    this.userService.updateItem(newUser).subscribe(res => {
      user.lock = !user.lock;
    });
  }
}
