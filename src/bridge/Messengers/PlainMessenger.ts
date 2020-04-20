import Messenger from "./Messenger";

export default class PlainMessenger extends Messenger {
    public send(messege: String): void {
        this.carrier.sendMessege(messege);
    }
}