import { Component, Input, OnInit } from '@angular/core';
import { Item } from "../../../../_models/item.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-suggestion',
    templateUrl: './suggestion.component.html',
    styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

    @Input() item: Item;
    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    navigate() {
        this.router.navigateByUrl('items/' + this.item.id).then(() => location.reload());
    }
}
