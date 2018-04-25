import { Component, OnInit } from '@angular/core';
import { OrderRepository } from '../../model/order.repository';
import { Order } from '../../model/order.model';

@Component({
  moduleId: module.id,
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  includeShipped = false;

  constructor(private repository: OrderRepository) {}

  getOrders(): Order[] {
    return this.repository.getOrders()
          .filter(order => this.includeShipped || !order.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }

  ngOnInit() {
  }

}
