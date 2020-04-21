import Merchant from "./Merchant";

export default class Client {
    public merchant: Merchant;

    constructor(merchant: Merchant) {
        this.merchant = merchant;
    }

    run(): void {
        console.log(`Your merchant made ${this.merchant.makeMoney()} \n`);
    }
}