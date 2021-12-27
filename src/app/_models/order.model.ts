import { Item } from "./item.model";

export class Order {

    constructor(public id: number,
                public delivery_address: string,
                public order_detail_items: OrderDetail[],
                public order_date: string,
                public total: number) {
    }
}

export class OrderDetail {
    constructor(public item: number, public itemObj: Item) {
    }
}
