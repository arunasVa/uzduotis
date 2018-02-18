export class Item {
  public id: number;
  public name: string;
  public weight: string;
  public price: number;

  constructor(id: number, name: string, weight: string, price: number) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.price = price;
  }
}