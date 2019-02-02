import { Component, OnInit } from '@angular/core';

import { PageService } from '../../services/page.service';
import { PageModel } from '../../models/page.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  pages: PageModel[] = [];
  slug = 'colombia';
  // country: any;

  constructor(private pagesService: PageService) { }

  ngOnInit() {
    this.country(this.slug);
  }

  country(slug) {
    this.pagesService.getItem(this.slug).subscribe(pages => {
      pages = pages;
    });
  }

  getCountries() {
    this.pagesService.getItems().subscribe(pages => {
      this.pages = pages;
    });
  }
}
