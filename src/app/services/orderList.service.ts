import { Order } from "./orderList.model";

export class OrderList {

  private nextId : number = 0;
  private orderList : Order[] = [];
  private date = new Date();

  getOrderList() {
    return this.orderList;
  }

  getNextId() : number {
    return this.nextId++;
  }
}
