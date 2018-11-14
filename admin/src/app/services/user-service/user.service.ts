import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  domain = 'http://localhost:4000/api/v2';

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<User[]>(`${this.domain}/users`).pipe(map(res => res));
  }

  getItem(id) {
    return this.http.get<User>(`${this.domain}/users/${id}`).pipe(map(res => res));
  }

  addItem(newUser: User) {
    return this.http.post<User>(`${this.domain}/users`, newUser).pipe(map(res => res));
  }

  deleteItem(id) {
    return this.http.delete<User>(`${this.domain}/users/${id}`).pipe(map(res => res));
  }

  updateItem(newUser) {
    return this.http.put<User>(`${this.domain}/users/${newUser._id}`, newUser).pipe(map(res => res));
  }
}
