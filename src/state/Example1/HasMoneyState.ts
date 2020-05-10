import VendingMechineState from "./VendingMechineState";
import VendingMechineContext from "./VendingMechineContext";
import IdleState from "./IdleStatte";

export default class HasMoneyState implements VendingMechineState {
    public insert(context: VendingMechineContext, money: number) {
        if (money < 0){
            throw new Error("You cannot insert negative money");
        }

        console.log(`HasMoneyState: you have inserted ${money} cents\n`);

        context.insertedMoney += money;
    }

    public refund(context: VendingMechineContext) {
        console.log(`HasMoneyState: refunding ${context.insertedMoney} cents\n`);

        context.insertedMoney = 0;

        context.setState(new IdleState);
    }

    public purchase(context: VendingMechineContext, productName: string) {
        const product = context.products.find(p => p.name == productName);

        if (!product) {
            throw new Error(`We do not have product with name ${productName}`);
        }

        if (product.amount < 1) {
            console.log(`HasMoneyState: sorry, we are out of ${productName}, please choose another product\n`);
            return;
        }

        if (product.price > context.insertedMoney) {
            console.log(`HasMoneyState: Sorry, you need at least ${product.price} to buy ${productName}`);   
            return;
        }

        context.totalMoney += context.insertedMoney;
        context.insertedMoney = 0;

        console.log(`HasMoneyState: vending mechine now has ${context.totalMoney} cents\n`);
        console.log(`HasMoneyState: vending mechine split out ${productName}\n`);

        context.setState(new IdleState);
    }
}