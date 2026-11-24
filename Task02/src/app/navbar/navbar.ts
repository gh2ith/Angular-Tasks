import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
 selectedPage: string = '';

message(event: Event ){
 this.selectedPage = (event.target as HTMLButtonElement).innerText;
alert(`you will be directed to the ${this.selectedPage} page`);

}

}

