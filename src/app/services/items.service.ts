import { Item } from "./items.model";

export class ItemsService {
  //prekiu sąrašas
  private itemsArr: Item[] = [
    { id: 1, name: 'Bandelė su kremu', weight: '35g', price: 0.30 },
    { id: 2, name: 'Bandelė su lasinukais', weight: '40g', price: 0.25 },
    { id: 3, name: 'Batonas mažas', weight: '350g', price: 0.60 },
    { id: 4, name: 'Šviesi duona', weight: '400g', price: 1.10 },
    { id: 5, name: 'Ruginė duona', weight: '400g', price: 1.20 },
    { id: 6, name: 'Batonas didelis', weight: '500g', price: 1.50 },
    { id: 7, name: 'Batonas su saulėgražomis', weight: '350g', price: 1.00 },
    { id: 8, name: 'Duona su saulėgražomis', weight: '250g', price: 0.90 },
    { id: 9, name: 'Batonas su sezamo sėklomis', weight: '350g', price: 0.80 },
    { id: 10, name: 'Bemielė duona', weight: '400g', price: 1.20 },
    { id: 11, name: 'Duona su įvairiomis sėklomis', weight: '400g', price: 1.40 },
    { id: 12, name: 'Viso grūdo kviečių duona', weight: '350g', price: 0.80 },
    { id: 13, name: 'Viso grūdo rugių duona', weight: '350g', price: 0.90 },
    { id: 14, name: 'Kepta duona su česnaku', weight: '200g', price: 1.50 },
    { id: 15, name: 'Tamsi duona', weight: '300g', price: 0.80 },
    { id: 17, name: 'Naminis obuolių pyragas', weight: '100g', price: 0.75 },
    { id: 18, name: 'Saldžios grūdinės lazdelės', weight: '100g', price: 0.56 },
    { id: 19, name: 'Duona su vaisais', weight: '350g', price: 2.10 },
    { id: 20, name: 'Tinginys', weight: '100g', price: 0.9 },
    { id: 21, name: 'Šokoladinis varškės pyragas', weight: '100g', price: 0.80 },
    { id: 22, name: 'Aguonų-obuolių vyniotinis', weight: '100g', price: 1.15 },
    { id: 23, name: 'Razinų pyragas', weight: '100g', price: 0.77 },
    { id: 24, name: 'Bandelė su aguonom', weight: '35g', price: 0.30 },
    { id: 25, name: 'Bandelė su obuoliais', weight: '350g', price: 0.9 },
    { id: 26, name: 'Bandelė su šokoladu', weight: '350g', price: 0.9 },
    { id: 27, name: 'Bandelė su cinamonu', weight: '350g', price: 0.9 },
    { id: 28, name: 'Bandelė su bananais	', weight: '350g', price: 0.9 },
    { id: 29, name: 'Bandelė su dešrele', weight: '350g', price: 0.9 },
    { id: 30, name: 'Bandelė pica', weight: '350g', price: 0.9 },
    { id: 31, name: 'Sausainiai su cinamonu', weight: '350g', price: 0.9 },
    { id: 32, name: 'Sausainiai su vanile', weight: '350g', price: 0.9 },
    { id: 33, name: 'Sausainiai su imbieru', weight: '350g', price: 0.9 },
    { id: 34, name: 'Sausainiai su riešutais ir džemu', weight: '350g', price: 0.9 },
    { id: 35, name: 'Sausainiai su saulegrąžom', weight: '350g', price: 0.9 },
    { id: 36, name: 'Sausainiai su šokoladu', weight: '350g', price: 0.9 },
    { id: 37, name: 'Sausainiai "Sveikuoliai"', weight: '350g', price: 0.9 },
    { id: 38, name: 'Vyniotinis su varške', weight: '350g', price: 0.9 },
    { id: 39, name: 'Kaimiški sausainiai', weight: '350g', price: 0.9 },
    { id: 40, name: 'Biskvitiniai sausainiai', weight: '350g', price: 0.9 },
    { id: 41, name: 'Kokosiniai sausainiai', weight: '350g', price: 0.9 },
    { id: 42, name: 'Sausainiai Smėlinė juostelė', weight: '350g', price: 0.9 },
    { id: 43, name: 'Avižiniai sausainiai', weight: '350g', price: 0.9 },
    { id: 44, name: 'Keksiukai su karamele', weight: '350g', price: 0.9 },
    { id: 45, name: 'Keksiukai su aviečių įdaru', weight: '350g', price: 0.9 },
    { id: 46, name: 'Keksiukai su šokoladu', weight: '350g', price: 0.9 },
    { id: 47, name: 'Keksiukai su razinomis', weight: '350g', price: 0.9 },
    { id: 48, name: 'Karamelinė bandelė', weight: '350g', price: 0.9 },
    { id: 49, name: 'Kibinas', weight: '350g', price: 0.9 },
    { id: 50, name: 'Pikantiška užkepėlė', weight: '350g', price: 0.9 }
  ];

  private shopCart: Item[] = [];

  getItemsArr() {
    return this.itemsArr;
  }

  getShopCart() {
    return this.shopCart;
  }

  addToShopCart(product: Item) {
    // if (this.shopCart.indexOf(product) !== -1) { //jei norėtume, kad negalėtų pridėti tos pačios prekės
    //     return;
    // }
    this.shopCart.push(product);
  }

  removeFromShopCart(product: Item) {
    this.shopCart.splice(this.shopCart.indexOf(product), 1);
  }

}