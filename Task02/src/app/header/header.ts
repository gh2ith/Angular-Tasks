import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

  name : string = "ghaith shop";
  welcomeMessage : string = "Welcome to our online store!";
  tagline : string = "Everything you need in one place";



}
