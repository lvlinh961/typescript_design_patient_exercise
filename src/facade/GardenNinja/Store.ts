import Plant from "./Plant";

export default interface Store {
    price(product: Plant): number
}