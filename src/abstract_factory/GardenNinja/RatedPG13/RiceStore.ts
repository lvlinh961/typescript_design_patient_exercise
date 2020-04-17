import Store from "../Store";
import Rice from "./Rice";

export default class RiceStore implements Store {
    price(product: Rice): number {
        return product.price;
    }
}