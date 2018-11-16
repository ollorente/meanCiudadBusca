import { Component, OnInit } from '@angular/core';

import { CountryService } from 'src/app/services/country-service/country.service';
import { CountryModel } from 'src/app/models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent implements OnInit {
  countries: CountryModel[];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.countryService.getItems().subscribe(
      countries => {
        this.countries = countries;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteItem(id) {
    const response = confirm('Are you sure to delete it?');
    if (response) {
      this.countryService.deleteItem(id).subscribe(data => {
        if (data.n === 1) {
          for (let i = 0; i < this.countries.length; i++) {
            if (this.countries[i]._id === id) {
              this.countries.splice(i, 1);
            }
          }
        }
      });
    }
    return;
  }

  viewItem(id) {
    this.countryService.getItem(id);
  }

  editItem(id) {
  }
}
