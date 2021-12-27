import { Photo } from "./photo.model";

export class Item {

  constructor(public id: number,
              public name: string,
              public photos?: Photo[],
              public in_stock?: number,
              public imgUrl?: string,
              public price?: number,
              public description?: number,
              public count?: number) {
  }
}
