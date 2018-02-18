import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Item } from '../services/items.model';
import { SearchPipe } from '../search.pipe'

@Component({
  selector: 'nfq-items',
  templateUrl: 'items.component.html'
})

export class ItemsComponent implements OnInit {

  public productName: String;
  public page: Number;

  itemsArr: Item[] = []

  //pridejimas i krepseli
  addToShopCart(product: Item) {
    this.itemsService.addToShopCart(product);
  }

  constructor(private itemsService: ItemsService) {

  }

  ngOnInit() {
    this.itemsArr = this.itemsService.getItemsArr();
  }

}

