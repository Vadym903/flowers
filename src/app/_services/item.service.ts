import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Item } from "../_models/item.model";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { OrderService } from "./order.service";

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient, private orderService: OrderService) {
    }

    public getAll(): Observable<Item[]> {
        return this.http.get<Item[]>(this.baseUrl + '/items/')
            .pipe(map(items => items.map(item => this.updateItem(item))));
    }

    public getById(id: number): Observable<Item> {
        return this.http.get<Item>(this.baseUrl + `/items/${id}/`)
            .pipe(map(item => this.updateItem(item)));
    }

    private updateItem(item: Item): Item {
        if (item.photos != undefined && item.photos?.length > 0) {
            item.imgUrl = `https://res.cloudinary.com/defxxvhq8/${item.photos[0].photo}`;
        } else {
            item.imgUrl = "https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
        }
        item.ordered = this.orderService.checkHowManyOrdered(item);
        return item;
    }

}
