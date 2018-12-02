import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PageService } from '../../services/page.service';
import { PageModel } from '../../models/page.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  pages: PageModel[] = [];
  slug: 'colombia';

  constructor(
    public pageService: PageService,
    public httpClient: HttpClientModule
  ) { }

  ngOnInit() {
    this.getPage(this.slug);
  }

  getPage(slug) {
    this.pageService.getItem(slug).subscribe(
      page => { page = page; },
      err => { console.log(err); }
    );
  }
}
