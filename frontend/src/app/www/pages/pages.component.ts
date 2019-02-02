import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { PageService } from '../../services/page.service';
import { PageModel } from '../../models/page.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  page: PageModel[];
  urlTree: any;
  slug: any;

  constructor(
    public pageService: PageService,
    private http: HttpClient,
    private router: Router
  ) {
    this.urlTree = this.router.parseUrl(this.router.url);

    this.slug = this.urlTree.queryParams['slug'];
  }


  ngOnInit() {
    this.getItem(this.slug);
    console.log(this.urlTree);
  }

  getItem(slug) {
    const page = this.pageService.getItem(slug);
    this.pageService.getItem(page);
  }
}
