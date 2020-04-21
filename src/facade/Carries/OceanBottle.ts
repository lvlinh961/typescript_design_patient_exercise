import Carrier from "./Carrier";

export default class OceanBottle implements Carrier {
    public sendMessege(message: String): void {
        console.log(`OCEAN BOTTLE: ${message}`);
    }
}