import { Component, OnInit } from '@angular/core';
import { ItemsComponent } from './../items/items.component';
import { Item } from '../services/items.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})

export class ShopCartComponent implements OnInit{
  //prekiu krepšelis
  pickedProducts: Item [] = [];

  //užsakymų sąrašas
  orderList = [];

  removeFromShopCart(product: Item) {
    this.itemsService.removeFromShopCart(product);
  }

  //sudarome užsakymą ir išvalome krepšelį
  makeOrderList() {
    for(var i = 0; i < this.pickedProducts.length; i++) {
      this.orderList.push(this.pickedProducts[i]);
    }
    this.pickedProducts.length = 0;
  }

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.pickedProducts = this.itemsService.getShopCart();
  }

}
