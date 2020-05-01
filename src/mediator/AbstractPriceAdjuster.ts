import PriceAdjustment from "./PriceAdjustment";

export default interface AbstractPriceAdjuster {
    adjustPrices(priceAdjustment: PriceAdjustment): void;
    addAdjustment(priceAdjustment: PriceAdjustment): void;
    removeAdjustment(priceAdjustment: PriceAdjustment): void;
}