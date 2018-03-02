import { Item } from "./items.model";

export class Order {
  public id: number;
  public date : Date;
  public products: Item[];

  constructor(id : number, date : Date, products : Item[]) {
    this.id = id;
    this.date = date;
    this.products = products;
  }
}
