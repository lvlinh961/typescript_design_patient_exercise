import PriceAdjustment from "./PriceAdjustment";
import AbstractPriceAdjuster from "./AbstractPriceAdjuster";

export default class Product extends PriceAdjustment {
    protected name: string;
    protected price: number;
    protected modifiedPrice: number;

    constructor(name: string, price: number, priceAdjuster: AbstractPriceAdjuster) {
        super(priceAdjuster);
        this.name = name;
        this.price = this.modifiedPrice = price;
        this.addAdjustment();
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.modifiedPrice;
    }

    public getOriginPrice(): number {
        return this.price;
    }

    public modifyPrice(price: number): void {
        this.modifiedPrice = price;
        this.updatePrices();
    }
}