import Carrier from "./Carrier";

export default class Outerspace implements Carrier {
    sendMessege(message: String): void {
        console.log(`OUTERSPACE: ${message}`);
    }
}