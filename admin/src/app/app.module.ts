import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { app_routing } from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { CenefaComponent } from './components/cenefa/cenefa.component';
import { UserService } from './services/user-service/user.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CountriesComponent } from './components/countries/countries.component';
import { RolesComponent } from './components/roles/roles.component';
import { PagesComponent } from './components/pages/pages.component';
import { SocialnetworksComponent } from './components/socialnetworks/socialnetworks.component';
import { SocialsComponent } from './components/socials/socials.component';
import { StatusPostsComponent } from './components/status-posts/status-posts.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LikesComponent } from './components/likes/likes.component';
import { FollowersComponent } from './components/followers/followers.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TypePurchasesComponent } from './components/type-purchases/type-purchases.component';
import { BannersComponent } from './components/banners/banners.component';
import { BannerTrackersComponent } from './components/banner-trackers/banner-trackers.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserComponent } from './components/user/user.component';
import { CountryService } from './services/country-service/country.service';
import { CountryComponent } from './components/country/country.component';
import { CountryEditComponent } from './components/country-edit/country-edit.component';
import { CountryNewComponent } from './components/country-new/country-new.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CenefaComponent,
    DashboardComponent,
    CountriesComponent,
    RolesComponent,
    PagesComponent,
    SocialnetworksComponent,
    SocialsComponent,
    StatusPostsComponent,
    PostsComponent,
    CommentsComponent,
    LikesComponent,
    FollowersComponent,
    ClientsComponent,
    TypePurchasesComponent,
    BannersComponent,
    BannerTrackersComponent,
    UserNewComponent,
    UserEditComponent,
    UserComponent,
    CountryComponent,
    CountryEditComponent,
    CountryNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing,
    FormsModule
  ],
  providers: [
    UserService,
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
