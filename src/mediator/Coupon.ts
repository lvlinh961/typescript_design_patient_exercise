import PriceAdjustment from "./PriceAdjustment";
import AbstractPriceAdjuster from "./AbstractPriceAdjuster";

export default class Coupon extends PriceAdjustment {
    protected name: string;
    protected amount: number;

    constructor(name: string, amount: number, priceAdjuster: AbstractPriceAdjuster) {
        super(priceAdjuster);
        this.name = name;
        this.amount = amount;
        this.addAdjustment();
    }

    public getName(): string {
        return this.name;
    }

    public getAmount(): number {
        return this.amount;
    }

    public modifyAmount(amount: number) {
        this.amount = amount;
        this.updatePrices();
    }
}