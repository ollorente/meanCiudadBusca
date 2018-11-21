import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: any = [];
  id = '5bef3fff2a6c57170594a8ab';

  constructor(
    private userService: UserService,
    public http: HttpClient
  ) {}

  ngOnInit() {
    this.getUser(this.id);
  }

  getUser(id) {
    this.userService.getItem(id).subscribe(user => {
      this.user = user;
    });
  }

  updateItem(event) {
    this.userService.updateItem(event).subscribe();
  }
}
