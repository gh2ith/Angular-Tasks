import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Product } from './products';

@Component({
  selector: 'app-product-details',
  template: `
    <section>
      <h2>{{ product.name }}</h2>
      <img [src]="product.image" [alt]="product.name" width="100">
      <p>{{ product.description }}</p>
      <p>Price: \${{ product.price }}</p>
      <p>{{ product.available ? 'Available' : 'Unavailable' }}</p>

      <button (click)="quantity.set(quantity() - 1)" [disabled]="quantity() <= 1">−</button>
      Quantity: {{ quantity() }}
      <button (click)="quantity.set(quantity() + 1)">+</button>

      <p>
        <button (click)="addToCart.emit(quantity())" [disabled]="!product.available">Add to Cart</button>
      </p>
    </section>
  `,
})
export class ProductDetails {
  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter<number>();

  quantity = signal(1);
}
