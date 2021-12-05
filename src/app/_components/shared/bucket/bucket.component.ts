import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../../_services/order.service";
import { Item } from "../../../_models/item.model";

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit {

  items: Item[] = [];
  address = '';
  totalPrice = 0;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.items.push(...this.orderService.getOrderedItems());
    this.calculateSum();

    this.orderService.newItemEvent.subscribe(() => {
      this.items = [];
      this.items.push(...this.orderService.getOrderedItems());
      this.calculateSum();
    });
  }

  removeItem(item: Item) {
    this.orderService.removeItem(item);
  }

  onAutocompleteSelected(event: any) {
    console.log(event);
  }

  onLocationSelected(event: any) {
    console.log(event);
  }

  buy() {
    this.orderService.clearAll();
    this.address = '';
    alert("THANKS FOR BUYING");
  }

  private calculateSum() {
    this.totalPrice = 0;
    this.items.forEach(item => {
      if (item.price) {
        this.totalPrice += item.price;
      }
    });
  }

}
