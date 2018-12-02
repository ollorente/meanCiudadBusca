import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './www/about/about.component';
import { CookiesComponent } from './www/cookies/cookies.component';
import { CreateAddComponent } from './www/create-add/create-add.component';
import { CreateSiteComponent } from './www/create-site/create-site.component';
import { DevelopmentComponent } from './www/development/development.component';
import { HashtagComponent } from './www/hashtag/hashtag.component';
import { HelpComponent } from './www/help/help.component';
import { IndexComponent } from './www/index/index.component';
import { LoginComponent } from './www/login/login.component';
import { LogupComponent } from './www/logup/logup.component';
import { MentionsComponent } from './www/mentions/mentions.component';
import { PagesComponent } from './www/pages/pages.component';
import { PrivacyComponent } from './www/privacy/privacy.component';
import { ProfileComponent } from './www/profile/profile.component';
import { SmsComponent } from './www/sms/sms.component';
import { WallComponent } from './www/wall/wall.component';

const routes: Routes = [
  { path: 'ayuda', component: HelpComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'crear-publicidad', component: CreateAddComponent },
  { path: 'crear-sitio', component: CreateSiteComponent },
  { path: 'desarrollo', component: DevelopmentComponent },
  { path: 'entrar', component: LoginComponent },
  { path: 'hashtag/:var', component: HashtagComponent },
  { path: 'index', component: IndexComponent },
  { path: 'menciones', component: MentionsComponent },
  { path: 'muro', component: WallComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'co/:slug', component: PagesComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'privacidad', component: PrivacyComponent },
  { path: 'registro', component: LogupComponent },
  { path: 'sms', component: SmsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
