import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(itemsArr: any, productName: any): any {
    
    if (productName === undefined) return itemsArr; //jei į search nieko neįvedam gražina viską
      return itemsArr.filter(function(item){
        //viską paverčiam mažosiom raidė, ir filtruojam vardus naudojant includes()
        return item.name.toLowerCase().includes(productName.toLowerCase());
      })
    
  }
}
