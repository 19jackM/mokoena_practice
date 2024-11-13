import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './sharedui/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lazy_loader';
}


// isLoad = false;
// onShow(){

// this.isLoad = !this.isLoad

// }

class MyClass {
  isLoad: boolean;
  constructor() {
    this.isLoad = false; // Initializing the property
  }

  onShow() {
    this.isLoad = !this.isLoad; // Toggling the value of isLoad
  }
}
