import { Component, OnInit } from '@angular/core';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})

export class RoutingComponent implements OnInit {

  shopCart = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {

    this.shopCart = this.itemsService.getShopCart();
  }
}
