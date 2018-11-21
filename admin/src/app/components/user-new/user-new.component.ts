import { Component, OnInit } from '@angular/core';

import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {
  users: UserModel[] = [];
  username: any;
  email: any;
  password: any;
  first_name: any;
  last_name: any;
  is_superuser: any;
  is_staff: any;
  active: any;
  lock: any;
  n: number;
  h: boolean;

  constructor(private userService: UserService) {}

  ngOnInit() {}

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
      updated_at: new Date(),
      n: this.n
    };
    this.userService.addItem(newUser).subscribe(user => {
      this.users.push(user);
      this.onAlert(this.h);
    });
  }

  onAlert(h) {
    h = true;
  }
}
