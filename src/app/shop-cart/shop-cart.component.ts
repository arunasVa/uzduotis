import { Component, OnInit } from '@angular/core';
import { ItemsComponent } from './../items/items.component';
import { Item } from '../services/items.model';
import { ItemsService } from '../services/items.service';
import { OrderList } from '../services/orderList.service';
import { Order } from '../services/orderList.model';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html'
})

export class ShopCartComponent implements OnInit {
  //prekiu krepšelis
  pickedProducts: Item[] = [];

  //užsakymų sąrašas
  orderList = [];
  date = undefined;
  removeFromShopCart(product: Item) {
    this.itemsService.removeFromShopCart(product);
  }

  //sudarome užsakymą ir išvalome krepšelį
  makeOrderList() {
    var counter = 0;
    var orderContainer = [];
    for (var i = 0; i < this.pickedProducts.length; i++) {
      orderContainer.push(this.pickedProducts[i]);
    }
    this.orderList.push(orderContainer);
    this.pickedProducts.length = 0;
  }

  constructor(private itemsService: ItemsService, private orderService: OrderList,) { }

  ngOnInit() {
    this.pickedProducts = this.itemsService.getShopCart();
    this.orderList = this.orderService.getOrderList();
    this.date = this.orderService.getDate();
  }

}