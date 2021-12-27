import { Component, Input, OnInit } from '@angular/core';
import { Item } from "../../../../_models/item.model";

@Component({
    selector: 'app-suggestion',
    templateUrl: './suggestion.component.html',
    styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

    @Input() item: Item;

    constructor() {
    }

    ngOnInit(): void {
    }

}
