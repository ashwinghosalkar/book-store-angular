import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUs } from './about-us/about-us';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'bookStoreApp';
}
