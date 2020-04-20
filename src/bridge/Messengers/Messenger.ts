import Carrier from "../Carries/Carrier";

export default class Messenger {
    protected carrier: Carrier;

    constructor(carrier: Carrier) {
        this.carrier = carrier;
    }

    public send(message: String): void {
        message = this.correctMisspellings(message);
        this.carrier.sendMessege(message);
    }

    public correctMisspellings(message: String): String {
        return message.replace("Helo", "Hello");
    }
}