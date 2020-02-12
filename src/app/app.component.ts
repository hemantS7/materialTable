import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    isLiked: false,
    likesCount: 10
  };
  title = 'materialTable';
}
