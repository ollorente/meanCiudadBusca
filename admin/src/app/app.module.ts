import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { CenefaComponent } from './components/cenefa/cenefa.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CenefaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
