import { Component } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  standalone: false,
  styleUrl: './productdetails.css',
  templateUrl: './productdetails.html',
})
export class Productdetails {

  productName: string = 'laptop';
productDescription: string = 'A high-performance laptop with a sleek design and powerful features.';
productPrice: number = 1499.99;
productImage: string = 'https://example.com/laptop.jpg';
quantity: number = 5;
isAvailable: boolean = true;
discountPercentage: number = 10;

}
