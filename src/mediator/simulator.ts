/**
 * @author lvlinh96
 * 
 * Implements Mediator pattern
 * 
 * Pattern intent: Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling
 * by keeping object from referring to each other explicity, and it lets you vary their interaction independently
 * 
 * Downside:
 * - Mediators tend to yield previous assholes, especially as the number of colleagues increases.
 * - When the mediator pattern doesn’t fit, you end up creating more complex code than needed. 
 */

import PriceAdjuster from "./PriceAdjuster";
import Product from "./Product";
import price from "./price";
import Coupon from "./Coupon";
import CustomerBenefit from "./CustomerBenefit";

var priceAdjuster = new PriceAdjuster;

var product1 = new Product('Block Cheese', 3.99, priceAdjuster);
var product2 = new Product('Frozen Pizza', 6.69, priceAdjuster);
var product3 = new Product('Popcorn', 2.34, priceAdjuster);
price('Client - untouched price', product1, product2, product3);

var coupon1 = new Coupon('Block Cheese', 1.00, priceAdjuster);
var coupon2 = new Coupon('Frozen Pizza', 2.00, priceAdjuster);
price('Client - added two coupon', product1, product2, product3);

// var benefit1 = new CustomerBenefit(30, priceAdjuster);
priceAdjuster.removeAdjustment(coupon1);
price('Client - removed coupon1', product1, product2, product3);