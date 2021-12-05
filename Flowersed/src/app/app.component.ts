import { Component, OnInit } from '@angular/core';
import { OrderService } from "./_services/order.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flowers';
  orderSideOpened = false;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService.isOrderSideNawOpened
      .subscribe(isOpened => this.orderSideOpened = isOpened);
  }

  onSideNavClose(event: any) {
    this.orderService.isOrderSideNawOpened.next(event);
  }
}
