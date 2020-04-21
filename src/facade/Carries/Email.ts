import Carrier from "./Carrier";

export default class Email implements Carrier {
    public sendMessege(message: String): void {
        console.log(`Email: ${message}`);
    }
}