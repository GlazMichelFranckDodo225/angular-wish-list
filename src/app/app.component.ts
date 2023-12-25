import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items = [
    new WishItem("Learn Angular"),
    new WishItem("Get Coffee", true),
    new WishItem("Find Grass that cuts itself")
  ];
  title = 'angular-wish-list';
}
