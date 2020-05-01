import AbstractPriceAdjuster from "./AbstractPriceAdjuster";
import PriceAdjustment from "./PriceAdjustment";

export default class PriceAdjuster implements AbstractPriceAdjuster {
    protected cid: number = 1;
    protected products: PriceAdjustment[] = [];
    protected coupons: PriceAdjustment[] = [];
    protected customerBenefits: PriceAdjustment[] = [];
    protected appliedCoupon: any[] = [];

    public adjustPrices(): void {
        var customerDiscount = this.getCustomerDiscount();

        this.products.map(product => {
            var oldPrice = product.getPrice();
            var newPrice = Math.round(this.getCouponDiscountForProduct(product) * (1 - customerDiscount / 1));
            if (oldPrice != newPrice) product.modifyPrice(newPrice);
        });
    }

    public addAdjustment(priceAdjustment: PriceAdjustment): void {
        this[`add${priceAdjustment.constructor.name}`](priceAdjustment);
    }

    public removeAdjustment(priceAdjustment: PriceAdjustment) {
        this[`remove${priceAdjustment.constructor.name}`](priceAdjustment);
    }

    protected addProduct(product: PriceAdjustment): void {
        this.addToCollection(this.products, product);
    }

    protected addCustomerBenefit(customerBenefit: PriceAdjustment): void {
        this.addToCollection(this.customerBenefits, customerBenefit);
    }

    protected addCoupon(coupon: PriceAdjustment): void {
        this.addToCollection(this.coupons, coupon);
    }

    protected removeProduct(product: PriceAdjustment): void {
        delete this.appliedCoupon[product.cid];
        this.removeFromCollection(this.products, product);
    }

    protected removeCustomerBenefit(customerBenefit: PriceAdjustment): void {
        this.removeFromCollection(this.customerBenefits, customerBenefit);
    }

    protected removeCoupon(coupon: PriceAdjustment): void {
        delete this.appliedCoupon[coupon.cid];
        this.removeFromCollection(this.coupons, coupon);
    }

    protected addToCollection(collection: PriceAdjustment[], object: PriceAdjustment): void {
        object.cid = this.cid++;

        collection.push(object);
        this.adjustPrices();
    }

    protected removeFromCollection(collection: PriceAdjustment[], object: PriceAdjustment): void {
        var index = collection.findIndex(obj => obj.cid === object.cid);

        delete collection[index];

        this.adjustPrices();
    }

    protected getCouponDiscountForProduct(product: PriceAdjustment): number {
        var coupon = this.getOneCouponPerProduct(product);

        return product.getOriginPrice() - ((coupon) ? coupon.getAmount() : 0);
    }

    protected getOneCouponPerProduct(product: PriceAdjustment): PriceAdjustment {
        var appliedCoupon = this.appliedCoupon;

        var alreadyMapped = appliedCoupon[product.cid] || false;

        var found = this.coupons.filter(coupon => {
            if (alreadyMapped !== false) {
                return coupon.cid == alreadyMapped;
            }

            return product.getName() == coupon.getName() && !appliedCoupon.includes(coupon.cid);
        });

        if (found.length == 0) return null;

        var coupon = found[0];

        this.appliedCoupon[product.cid] = coupon.cid;

        return coupon;
    }

    protected getCustomerDiscount(): number{
        if (this.customerBenefits.length == 0) return 0;
        
        var customerDiscount = Math.min(100, this.customerBenefits.reduce((benefit, value, index, []) => {
            var discount = benefit ? benefit.getDiscount() : 0;

            value.setDiscount(value.getDiscount() + discount);

            return value;
        }).getDiscount());

        if (this.coupons.length > 2) {
            customerDiscount = 0;
        }

        return customerDiscount;
    }
}