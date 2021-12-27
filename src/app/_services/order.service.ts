import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { EventEmitter, Injectable } from "@angular/core";
import { Item } from "../_models/item.model";
import { BehaviorSubject } from "rxjs";
import { finalize } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    baseUrl = environment.baseUrl;
    itemInStorageName = 'orderedItems'

    isOrderSideNawOpened = new BehaviorSubject(false);
    newItemEvent = new EventEmitter<void>();

    constructor(private http: HttpClient) {
    }

    makeOrder(deliveryAddress: string) {
        const itemIds = this.getOrderedItems().map(item => item.id);
        const requestBody = {order_detail_items: itemIds, delivery_address: deliveryAddress};
        return this.http.post(this.baseUrl + '/orders/', requestBody)
            .pipe(finalize(() => this.clearAll()));
    }

    addItemToOrder(item: Item) {
        const items = this.getOrderedItems();
        items.push(item);
        localStorage.setItem(this.itemInStorageName, JSON.stringify(items));
        this.newItemEvent.emit();
    }

    getOrderedItems(): Item[] {
        let items: Item[] = [];
        const itemsFromStorage = localStorage.getItem(this.itemInStorageName);
        if (itemsFromStorage) {
            const parsedItems = JSON.parse(itemsFromStorage) as unknown as Item[];
            parsedItems.forEach(item => items.push(item))
        }
        return items;
    }

    removeItem(itemToDelete: Item): void {
        let items = this.getOrderedItems();
        const indexToRemove = items.findIndex(item => JSON.stringify(item) == JSON.stringify(itemToDelete));
        items.splice(indexToRemove, 1);
        localStorage.setItem(this.itemInStorageName, JSON.stringify(items));
        this.newItemEvent.emit();
    }

    checkHowManyOrdered(item: Item) {
        let ordered = item.ordered || 0;
        this.getOrderedItems().forEach(orderedItem => {
            if (item.id === orderedItem.id) {
                ordered++;
            }
        });
        return ordered;
    }

    clearAll() {
        localStorage.removeItem(this.itemInStorageName);
        this.newItemEvent.emit();
    }
}
