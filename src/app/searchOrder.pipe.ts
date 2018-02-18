import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'searchOrder'
})

export class SearchOrderPipe implements PipeTransform {

  transform(orderList: any, orderNumber: any): any {

    if (orderNumber) {
      return [orderList[orderNumber]];
    }
    return orderList;
  }
}