import { Photo } from "./photo.model";

export class Item {

  constructor(public id: number,
              public name: string,
              public photos?: Photo[],
              public in_stock: number = 0,
              public imgUrl?: string,
              public price?: number,
              public description?: number,
              public ordered: number = 0,
              public count?: number) {
  }
}
