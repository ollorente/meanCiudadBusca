import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { CountryModel } from '../../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  domain = 'http://localhost:4000/api/v2';

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<CountryModel[]>(`${this.domain}/countries`).pipe(map(res => res));
  }

  getItem(id) {
    return this.http.get<CountryModel>(`${this.domain}/countries/${id}`).pipe(map(res => res));
  }

  addItem(newCountry: CountryModel) {
    return this.http.post<CountryModel>(`${this.domain}/countries`, newCountry).pipe(map(res => res));
  }

  deleteItem(id) {
    return this.http.delete<CountryModel>(`${this.domain}/countries/${id}`).pipe(map(res => res));
  }

  updateItem(newCountry) {
    return this.http.put<CountryModel>(`${this.domain}/countries/${newCountry._id}`, newCountry).pipe(map(res => res));
  }
}
