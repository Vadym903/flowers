import { Component, OnInit } from '@angular/core';
import { Item } from "../../../_models/item.model";
import { ItemService } from "../../../_services/item.service";
import { ActivatedRoute } from "@angular/router";
import { OrderService } from "../../../_services/order.service";

@Component({
    selector: 'app-item-info',
    templateUrl: './item-info.component.html',
    styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {

    suggestions: Item[] = [];
    mainImgSrc = '';
    item: Item;
    photos: {
        path: string;
    }[] = [];
    description = "Traveling with fresh flowers is a tricky endeavor because of the many rules and regulations governing what can safely be brought aboard an airplane. The water and chemical preservatives normally used to keep flowers fresh and nice looking will not successfully pass through security checkpoints because bringing large quantities of liquid aboard airplanes is prohibited. But it is possible to safely take flowers on airplanes for domestic flights and get through security checkpoints with minimal hassles by observing a few basic tips. ITEMS YOU WILL NEED Pruning shears Water Candy thermometer Vase Cut flower preservative Paper towel Plastic wrap Masking tape STEP 1 Prepare the flowers for transport several hours before arriving at the airport. Remove the leaves from along the lower half of each cut flower stem. Trim off the bottom inch from each stem. Make the cut slightly angled. Use clean pruning shears or sharp scissors to remove the leaves and trim the stems";

    constructor(private itemService: ItemService, private router: ActivatedRoute, private orderService: OrderService) {
    }

    ngOnInit(): void {
        this.router.params.subscribe(params => this.initItem(params.id));
    }

    addToOrder(): void {
        this.orderService.addItemToOrder(this.item);
    }

    private initItem(id: number) {
        this.itemService.getById(id).subscribe(item => {
            this.item = item;
            this.itemService.getAll().subscribe(items => this.suggestions = this.getSuggestionsFromAll(items, item));
            if (item.photos) {
                // @ts-ignore
                item.photos.forEach(img => {
                    this.photos.push({path: `https://res.cloudinary.com/defxxvhq8/${img.photo}`});
                });
            }
        });
    }

    private getSuggestionsFromAll(items: Item[], currentItem: Item): Item[] {
        const keyWords = currentItem.name.split(' ');
        return items.filter(item => {
            const itemKeys = item.name.split(' ').map(key => key.toLowerCase());
            return keyWords.some(r => itemKeys.includes(r.toLowerCase()));
        });
    }

}
