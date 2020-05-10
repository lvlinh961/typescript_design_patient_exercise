import VendingMechineContext from "./VendingMechineContext";

export default interface VendingMechineState {
    insert(context: VendingMechineContext, money: number): void;
    refund(context: VendingMechineContext): void;
    purchase(context: VendingMechineContext, product: string): void;
}