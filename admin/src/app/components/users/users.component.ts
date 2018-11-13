import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    console.log('Método GET');
  }

  postItem() {
    console.log('Método POST');
  }

  putItem() {
    console.log('Método PUT');
  }

  deleteItem() {
    console.log('Método DELETE');
  }
}
