import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { PageModel } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  domain = 'http://localhost:3000/api/v4/pages/';

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<PageModel[]>(`${this.domain}`).pipe(map(res => res));
  }

  getItem(slug) {
    return this.http.get<PageModel>(`${this.domain}/${slug}`).pipe(map(res => res));
  }

  addItem(NewItem: PageModel) {
    return this.http.post<PageModel>(`${this.domain}`, NewItem).pipe(map(res => res));
  }

  updateItem(newItem) {
    return this.http.put<PageModel>(`${this.domain}/${newItem.slug}`, newItem).pipe(map(res => res));
  }

  deleteItem(slug) {
    return this.http.delete<PageModel>(`${this.domain}/${slug}`).pipe(map(res => res));
  }
}
