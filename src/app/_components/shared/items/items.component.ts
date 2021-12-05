import { Component, OnInit } from '@angular/core';
import { ItemService } from "../../../_services/item.service";
import { Item } from "../../../_models/item.model";
import { AuthService } from "../../../_services/auth-service.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  filterByTitleText = '';
  constructor(private itemService: ItemService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(): void {
    this.itemService.getAll().subscribe(items => {
      this.items = items;
    });
  }

  trackById(index: number, item: Item): number {
    return item.id;
  }

}
