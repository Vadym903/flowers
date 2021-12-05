import { Component, Input, OnInit } from '@angular/core';
import { Item } from "../../../../_models/item.model";
import { OrderService } from "../../../../_services/order.service";

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  addToOrder(): void {
    this.orderService.addItemToOrder(this.item);
  }

}
