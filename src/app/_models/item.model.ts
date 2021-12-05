import { Photo } from "./photo.model";

export class Item {

  constructor(public id: number,
              public photos?: Photo[],
              public name?: string,
              public in_stock?: number,
              public imgUrl?: string,
              public price?: number) {
  }
}
