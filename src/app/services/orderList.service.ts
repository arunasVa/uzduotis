import { Order } from "./orderList.model";

export class OrderList {

  private orderList = [];
  private date = new Date();

  getOrderList() {
    return this.orderList;
  }
  getDate() {
    return this.date;
  }
}
