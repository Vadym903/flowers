import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { EventEmitter, Injectable } from "@angular/core";
import { Item } from "../_models/item.model";
import { BehaviorSubject } from "rxjs";

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
    items.forEach((item, i) => {
      if (JSON.stringify(item) == JSON.stringify(itemToDelete)) {
        items.splice(i, 1);
      }
    });
    localStorage.setItem(this.itemInStorageName, JSON.stringify(items));
    this.newItemEvent.emit();
  }

  clearAll() {
    localStorage.removeItem(this.itemInStorageName);
    this.newItemEvent.emit();
  }
}
