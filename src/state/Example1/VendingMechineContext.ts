import VendingMechineState from "./VendingMechineState";
import { Product } from "./ProductType";

export default class VendingMechineContext {
    protected state: VendingMechineState;

    public insertedMoney: number;

    public totalMoney: number;

    public products: Product[];

    constructor(products: Product[], insertedMoney: number = 0, totalMoney: number = 0) {
        this.products = products;
        this.insertedMoney = insertedMoney;
        this.totalMoney = totalMoney;
    }

    public getState(): VendingMechineState {
        return this.state;
    }

    public setState(state: VendingMechineState): void {
        this.state = state;
    }
}