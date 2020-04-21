import Store from "../Store";
import Drug from "./Drug";

export default class DrugStore implements Store {
    price(product: Drug): number {
        return product.price;
    }
}