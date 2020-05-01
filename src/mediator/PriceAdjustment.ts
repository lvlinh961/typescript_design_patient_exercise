import AbstractPriceAdjuster from "./AbstractPriceAdjuster";

export default abstract class PriceAdjustment {
    [x: string]: any;
    public cid: number = 0;
    private priceAdjuster: AbstractPriceAdjuster;

    constructor(priceAdjuster: AbstractPriceAdjuster) {
        this.priceAdjuster = priceAdjuster;
        
    }

    public addAdjustment() {
        this.priceAdjuster.addAdjustment(this);
    }

    public updatePrices(): void {
        this.priceAdjuster.adjustPrices(this);
    }
}