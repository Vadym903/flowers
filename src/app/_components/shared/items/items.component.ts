import { Component, OnInit } from '@angular/core';
import { ItemService } from "../../../_services/item.service";
import { Item } from "../../../_models/item.model";
import { AuthService } from "../../../_services/auth-service.service";
import { OrderService } from "../../../_services/order.service";

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
    items: Item[] = [];
    filteredItems: Item[] = [];
    filterByTitleText = '';

    constructor(private itemService: ItemService, private authService: AuthService, private orderService: OrderService) {
    }

    ngOnInit(): void {
        this.loadPage();
        this.orderService.newItemEvent.subscribe(() => this.loadPage());
    }

    loadPage(): void {
        this.itemService.getAll().subscribe(items => {
            this.items = items;
            this.filteredItems = items;
        });
    }

    filterItems() {
        this.filteredItems = this.items.filter(item => item.name.toLowerCase().indexOf(this.filterByTitleText.toLowerCase()) > -1);
    }

    trackById(index: number, item: Item): number {
        return item.id;
    }

}
