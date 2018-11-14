import { Component } from '@angular/core';
import { UsersComponent } from './components/users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rootPage = UsersComponent;
}
