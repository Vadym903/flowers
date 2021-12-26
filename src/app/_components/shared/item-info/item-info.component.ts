import { Component, Input, OnInit } from '@angular/core';
import { Item } from "../../../_models/item.model";
import { ItemService } from "../../../_services/item.service";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
    selector: 'app-item-info',
    templateUrl: './item-info.component.html',
    styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {

    item: Item;

    constructor(private itemService: ItemService, private router: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.router.params.subscribe(params => this.initItem(params.id));
    }

    private initItem(id: number) {
        this.itemService.getById(id).subscribe(item => {
            console.log(id);
            console.log(item);
            this.item = item;
        });
    }

}
