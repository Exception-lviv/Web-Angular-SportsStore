import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount = 0;
  public cartPrice = 0;

  addLine(product: Product, quantity: number = 1) {
    const line = this.lines.find(currLine => currLine.product.id === product.id);
    if (line !== undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number) {}

  get lineTotal() {
    return this.quantity * this.product.price;
  }
}
