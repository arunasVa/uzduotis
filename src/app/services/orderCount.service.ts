import { OrderCounter } from "./orderCount.model";

export class OrderCount {

    private orderCount: OrderCounter[] = [];

    getOrderCount() {
        return this.orderCount;
    }

}