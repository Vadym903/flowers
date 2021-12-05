import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Item } from "../_models/item.model";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl + '/items/')
      .pipe(map(items =>
        items.map(item => {
          if (item.photos != undefined && item.photos?.length > 0) {
            item.imgUrl = `https://res.cloudinary.com/defxxvhq8/${item.photos[0].photo}`;
          } else {
            item.imgUrl = "https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
          }
          return item;
        })));
  }

}
