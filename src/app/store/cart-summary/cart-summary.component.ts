import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/cart.model';

@Component({
  selector: 'app-cart-summary',
  moduleId: module.id,
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit() {
  }

}
