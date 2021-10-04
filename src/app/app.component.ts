import { Component } from '@angular/core';
import { TITLE } from './shared/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = TITLE.DEFAULT;
}
