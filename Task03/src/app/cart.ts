import { Component, Input } from '@angular/core';
import { Product } from './products';

@Component({
  selector: 'app-cart',
  template: `
    <section>
      <h2>🛒 Cart</h2>
      @if (product) {
        <p>{{ quantity }} × {{ product.name }} (\${{ product.price }})</p>
        <h3>Total: \${{ product.price * quantity }}</h3>
      } @else {
        <p>Your cart is empty.</p>
      }
    </section>
  `,
})
export class Cart {
  @Input() product: Product | null = null;
  @Input() quantity = 0;
}
