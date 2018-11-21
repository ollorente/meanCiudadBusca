import { Component, OnInit } from '@angular/core';

import { CountryModel } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country-service/country.service';

@Component({
  selector: 'app-country-new',
  templateUrl: './country-new.component.html',
  styleUrls: ['./country-new.component.scss']
})
export class CountryNewComponent implements OnInit {
  countries: CountryModel[] = [];
  name: any;
  code: any;
  phone_code: any;
  slug: any;
  active: any;
  n: any;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
  }

  eSubmit(event) {
    event.preventDefault();
    const newCountry: CountryModel = {
      name: this.name,
      code: this.code,
      phone_code: this.phone_code,
      slug: this.slug,
      active: this.active,
      created_at: new Date(),
      updated_at: new Date(),
      n: this.n
    };
    this.countryService.addItem(newCountry).subscribe(country => {
      this.countries.push(newCountry);
    });
  }

  alert() {}
}
