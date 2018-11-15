import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  domain = 'http://localhost:4000/api/v2';

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<UserModel[]>(`${this.domain}/users`).pipe(map(res => res));
  }

  getItem(id) {
    return this.http.get<UserModel>(`${this.domain}/users/${id}`).pipe(map(res => res));
  }

  addItem(newUser: UserModel) {
    return this.http.post<UserModel>(`${this.domain}/users`, newUser).pipe(map(res => res));
  }

  deleteItem(id) {
    return this.http.delete<UserModel>(`${this.domain}/users/${id}`).pipe(map(res => res));
  }

  updateItem(newUser) {
    return this.http.put<UserModel>(`${this.domain}/users/${newUser._id}`, newUser).pipe(map(res => res));
  }
}
