import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PageService } from '../../services/page.service';
import { PageModel } from '../../models/page.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  pages: PageModel[] = [];
  slug: string;

  constructor(
    public pageService: PageService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getPage('colombia');
  }

  getPage(slug) {
    this.pageService.getItem(slug).subscribe(page => {
      page = page;
    });
  }
}
