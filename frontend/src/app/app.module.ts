import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Owns
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CenefaComponent } from './components/cenefa/cenefa.component';
import { PostsComponent } from './components/posts/posts.component';
import { LatestPostComponent } from './components/latest-post/latest-post.component';
import { AddressComponent } from './components/address/address.component';
import { CountryComponent } from './templates/country/country.component';
import { OfficeComponent } from './templates/office/office.component';
import { PageComponent } from './templates/page/page.component';
import { SiteComponent } from './templates/site/site.component';
import { UserComponent } from './templates/user/user.component';
import { AddsComponent } from './components/adds/adds.component';

// import { AboutComponent } from './www/about/about.component';
// import { CookiesComponent } from './www/cookies/cookies.component';
// import { CreateAddComponent } from './www/create-add/create-add.component';
// import { CreateSiteComponent } from './www/create-site/create-site.component';
// import { DevelopmentComponent } from './www/development/development.component';
import { GroupComponent } from './templates/group/group.component';
// import { HashtagComponent } from './www/hashtag/hashtag.component';
import { HelpComponent } from './www/help/help.component';
import { IndexComponent } from './www/index/index.component';
import { LoginComponent } from './www/login/login.component';
import { LogupComponent } from './www/logup/logup.component';
// import { MentionsComponent } from './www/mentions/mentions.component';
import { PagesComponent } from './www/pages/pages.component';
// import { PrivacyComponent } from './www/privacy/privacy.component';
// import { ProfileComponent } from './www/profile/profile.component';
// import { SmsComponent } from './www/sms/sms.component';
// import { WallComponent } from './www/wall/wall.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // AboutComponent,
    // CookiesComponent,
    // CreateAddComponent,
    // CreateSiteComponent,
    // DevelopmentComponent,
    // HashtagComponent,
    HelpComponent,
    IndexComponent,
    LoginComponent,
    LogupComponent,
    // MentionsComponent,
    PagesComponent,
    // PrivacyComponent,
    // ProfileComponent,
    // SmsComponent,
    // WallComponent,
    CenefaComponent,
    PostsComponent,
    LatestPostComponent,
    AddressComponent,
    CountryComponent,
    OfficeComponent,
    PageComponent,
    SiteComponent,
    UserComponent,
    GroupComponent,
    AddsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
