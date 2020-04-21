import Carrier from "./Carrier";

export default class SnailMail implements Carrier {
    protected address: String;

    constructor(address: String) {
        this.address = address;
    }

    sendMessege(message: String): void {
        console.log(`SNAIL MAIL: ${message} sending to ${this.address}`);
    }
}