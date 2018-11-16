import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CountriesComponent } from './components/countries/countries.component';
import { RolesComponent } from './components/roles/roles.component';
import { PagesComponent } from './components/pages/pages.component';
import { SocialnetworksComponent } from './components/socialnetworks/socialnetworks.component';
import { BannerTrackersComponent } from './components/banner-trackers/banner-trackers.component';
import { BannersComponent } from './components/banners/banners.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FollowersComponent } from './components/followers/followers.component';
import { LikesComponent } from './components/likes/likes.component';
import { PostsComponent } from './components/posts/posts.component';
import { SocialsComponent } from './components/socials/socials.component';
import { StatusPostsComponent } from './components/status-posts/status-posts.component';
import { TypePurchasesComponent } from './components/type-purchases/type-purchases.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserComponent } from './components/user/user.component';
import { CountryNewComponent } from './components/country-new/country-new.component';
import { CountryComponent } from './components/country/country.component';
import { CountryEditComponent } from './components/country-edit/country-edit.component';

const app_routes: Routes = [
    { path: 'banner-trackers', component: BannerTrackersComponent },
    { path: 'banners', component: BannersComponent },
    { path: 'banners/:id', component: BannersComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'clients/:id', component: ClientsComponent },
    { path: 'comments', component: CommentsComponent },
    { path: 'comments/:id', component: CommentsComponent },
    { path: 'countries', component: CountriesComponent },
    { path: 'countries/new', component: CountryNewComponent },
    { path: 'countries/:id', component: CountryComponent },
    { path: 'countries/:id/edit', component: CountryEditComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'followers', component: FollowersComponent },
    { path: 'likes', component: LikesComponent },
    { path: 'pages', component: PagesComponent },
    { path: 'pages/:id', component: PagesComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'posts/:id', component: PostsComponent },
    { path: 'roles', component: RolesComponent },
    { path: 'roles/:id', component: RolesComponent },
    { path: 'social-networks', component: SocialnetworksComponent },
    { path: 'social-networks/:id', component: SocialnetworksComponent },
    { path: 'socials', component: SocialsComponent },
    { path: 'status-posts', component: StatusPostsComponent },
    { path: 'status-posts/:id', component: StatusPostsComponent },
    { path: 'type-purchases', component: TypePurchasesComponent },
    { path: 'type-purchases/:id', component: TypePurchasesComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/new', component: UserNewComponent },
    { path: 'users/:id', component: UserComponent },
    { path: 'users/:id/edit', component: UserEditComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const app_routing = RouterModule.forRoot(app_routes);
