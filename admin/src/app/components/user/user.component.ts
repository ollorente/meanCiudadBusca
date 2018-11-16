import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  getItem(id) {
    this.userService.getItem(id).subscribe(
      users => {
        this.users = users;
      },
      err => {
        console.log(err);
      }
    );
  }
}
