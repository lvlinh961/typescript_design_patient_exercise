import VendingMechineContext from "./VendingMechineContext";
import IdleState from "./IdleStatte";
import { Product } from "./ProductType";

export default class VendingMechine {
    protected context: VendingMechineContext;

    protected products:Product[] = [
        {name: 'Dr. Pepper', amount: 0, price:  125},
        {name: 'Pepsi', amount: 1, price:  125},
        {name: 'Mountain Dew', amount: 0, price:  125},
    ];

    constructor(){
        this.context = new VendingMechineContext(this.products);
        this.context.setState(new IdleState);
    }

    public insert(money: number) {
        return this.context.getState().insert(this.context, money);
    }

    public refund() {
        this.context.getState().refund(this.context);
    }

    public purchase(product: string) {
        this.context.getState().purchase(this.context, product);
    }
}