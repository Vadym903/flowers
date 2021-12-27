import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../../_services/order.service";
import { Order } from "../../../_models/order.model";

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

    orders: Order[];

    constructor(private orderService: OrderService) {
    }

    ngOnInit(): void {
        this.initOrders()
        this.orderService.newItemEvent.subscribe(() => this.initOrders());
    }

    private initOrders() {
        this.orderService.getUserOrders().subscribe(orders => this.orders = orders);
    }

}
