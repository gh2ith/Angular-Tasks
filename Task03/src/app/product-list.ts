import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './products';

@Component({
  selector: 'app-product-list',
  template: `
    <h2>Products</h2>
    <div class="products">
      @for (product of products; track product.name) {
        <div class="card">
          <img [src]="product.image" [alt]="product.name">
          <h3>{{ product.name }}</h3>
          <p>\${{ product.price }}</p>
          <button (click)="select.emit(product)">View</button>
        </div>
      }
    </div>
  `,
})
export class ProductList {
  @Input() products: Product[] = [];
  @Output() select = new EventEmitter<Product>();
}
