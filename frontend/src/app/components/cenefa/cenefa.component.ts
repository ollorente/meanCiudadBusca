import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PageService } from '../../services/page.service';
import { PageModel } from '../../models/page.model';

@Component({
  selector: 'app-cenefa',
  templateUrl: './cenefa.component.html',
  styleUrls: ['./cenefa.component.scss']
})
export class CenefaComponent implements OnInit {
  @Input() nameSlug;
  page: PageModel[] = [];
  slug: string;

  constructor(
    private pageService: PageService,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.getCenefa(this.slug);
  }

  getCenefa(slug) {
    // this.pageService.getItem(slug).subscribe(page => {
    //   console.log(page);
    // });
  }
}
