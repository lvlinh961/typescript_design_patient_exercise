import PriceAdjustment from "./PriceAdjustment";
import AbstractPriceAdjuster from "./AbstractPriceAdjuster";

export default class CustomerBenefit extends PriceAdjustment {
    protected discount: number;

    constructor(discount: number, priceAdjuster: AbstractPriceAdjuster) {
        super(priceAdjuster);
        this.discount = discount;
        this.addAdjustment();
    }

    public getDiscount(): number {
        return this.discount;
    }

    public setDiscount(discount: number): void {
        this.discount = discount;
    }

    public modifyDiscount(discount: number) {
        this.discount = discount;
        this.updatePrices();
    }
}