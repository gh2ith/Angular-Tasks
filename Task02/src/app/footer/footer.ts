import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {

storeName: string = 'TechStore';
storeAddress: string = '123 Tech Street, Silicon Valley, CA';
storeContact: string = 'email@email.email';
copyrightmessage: string = '© 2023 TechStore. All rights reserved.';

}
