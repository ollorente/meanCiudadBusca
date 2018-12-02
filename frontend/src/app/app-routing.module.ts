import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './www/index/index.component';
import { PagesComponent } from './www/pages/pages.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '/:slug', component: PagesComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
