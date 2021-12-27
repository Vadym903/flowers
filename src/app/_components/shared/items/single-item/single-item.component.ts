import { Component, Input, OnInit } from '@angular/core';
import { Item } from "../../../../_models/item.model";
import { OrderService } from "../../../../_services/order.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-single-item',
    templateUrl: './single-item.component.html',
    styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

    @Input() item: Item;

    constructor(private orderService: OrderService, private router: Router) {
    }

    ngOnInit(): void {

    }

    addToOrder(): void {
        this.orderService.addItemToOrder(this.item);
    }

    openInfoPage() {
        this.router.navigateByUrl('items/' + this.item.id);
    }
}
