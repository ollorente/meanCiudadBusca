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

  viewItem(id) {
    this.userService.getItem(id);
  }

  editItem(id) {
  }
}
