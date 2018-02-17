import { Item } from "./items.model";

export class ItemsService {
    //prekiu sąrašas
    private itemsArr: Item [] = [
        {id: 1, name: 'Bandele su kremu', weight: '35g', price: 0.30},
        {id: 2, name: 'Bandele su lasinukais', weight: '40g', price: 0.25},
        {id: 3, name: 'Batonas mažas', weight: '350g', price: 0.60},
        {id: 4, name: 'Šviesi duona', weight: '400g', price: 1.10},
        {id: 5, name: 'Ruginė duona', weight: '400g', price: 1.20},
        {id: 6, name: 'Batonas didelis', weight: '500g', price: 1.50},
        {id: 7, name: 'Batonas su saulėgražomis', weight: '350g', price: 1.00},
        {id: 8, name: 'Duona su saulėgražomis', weight: '250g', price: 0.90},
        {id: 9, name: 'Batonas su sezamo sėklomis', weight: '350g', price: 0.80},
        {id: 10, name: 'Bemielė duona', weight: '400g', price: 1.20},
        {id: 11, name: 'Duona su ivairiomis sėklomis', weight: '400g', price: 1.40},
        {id: 12, name: 'Viso grūdo kviečių duona', weight: '350g', price: 0.80},
        {id: 13, name: 'Viso grūdo rugių duona', weight: '350g', price: 0.90},
        {id: 14, name: 'Kepta duona su česnaku', weight: '200g', price: 1.50},
        {id: 15, name: 'Tamsi duona', weight: '300g', price: 0.80},
        {id: 16, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 17, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 18, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 19, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 20, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 21, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 16, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 17, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 18, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 19, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 20, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 21, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 16, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 17, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 18, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 19, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 20, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 21, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 16, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 17, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 18, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 19, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 20, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 21, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 16, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 17, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 18, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 19, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 20, name: 'Batonas', weight: '350g', price: 0.9},
        {id: 21, name: 'Batonas', weight: '350g', price: 0.9},
    ];
    
    private shopCart: Item [] = [];

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