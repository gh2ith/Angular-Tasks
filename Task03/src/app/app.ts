import { Component, signal } from '@angular/core';
import { Header } from './header';
import { Footer } from './footer';
import { ProductList } from './product-list';
import { ProductDetails } from './product-details';
import { Cart } from './cart';
import { Product, PRODUCTS } from './products';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ProductList, ProductDetails, Cart],
  template: `
    <app-header />
    <main>
      <app-product-list [products]="products" (select)="selected.set($event)" />

      <div class="row">
        <app-product-details [product]="selected()" (addToCart)="addToCart(selected(), $event)" />
        <app-cart [product]="cartProduct()" [quantity]="cartQuantity()" />
      </div>
    </main>
    <app-footer />
  `,
})
export class App {
  products = PRODUCTS;
  selected = signal<Product>(PRODUCTS[0]);

  cartProduct = signal<Product | null>(null);
  cartQuantity = signal(0);

  addToCart(product: Product, quantity: number) {
    this.cartProduct.set(product);
    this.cartQuantity.set(quantity);
  }
}
