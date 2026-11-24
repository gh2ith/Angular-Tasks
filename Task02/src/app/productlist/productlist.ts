import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  standalone: false,
  styleUrl: './productlist.css',
  templateUrl: './productlist.html',
})
export class Productlist {

products = [
  { name: 'Product 1', price: 10.99, description: 'Description of Product 1', Available: true, image: 'https://via.placeholder.com/150' },
  { name: 'Product 2', price: 19.99, description: 'Description of Product 2', Available: false, image: 'https://via.placeholder.com/150' },
  { name: 'Product 3', price: 5.99, description: 'Description of Product 3', Available: true, image: 'https://via.placeholder.com/150' },
  { name: 'Product 4', price: 15.49, description: 'Description of Product 4', Available: true, image: 'https://via.placeholder.com/150' },
  { name: 'Product 5', price: 8.99, description: 'Description of Product 5', Available: false, image: 'https://via.placeholder.com/150' },
];

disabled: boolean = false;

buyProduct(product: { name: string; price: number; description: string; Available: boolean }) {
  if (product.Available) {
    alert(`You have bought ${product.name} for $${product.price}`);
  } else {
    this.disabled = true;
  }

}}
