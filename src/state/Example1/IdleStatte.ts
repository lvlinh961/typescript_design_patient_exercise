import VendingMechineState from "./VendingMechineState";
import VendingMechineContext from "./VendingMechineContext";
import HasMoneyState from "./HasMoneyState";

export default class IdleState implements VendingMechineState {
    public insert(context: VendingMechineContext, money: number) {
        const hasMoneyState = new HasMoneyState;
        context.setState(hasMoneyState);
        hasMoneyState.insert(context, money);
    }

    public refund() {
        console.log(`IdleState: no refund available in idle state\n`);
    }

    public purchase(context: VendingMechineContext, product: string) {
        console.log(`IdleState: you'll need to enter money to purchase ${product}\n`)
    }
}