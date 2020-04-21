import Carrier from "./Carrier";

export default class TextMessege implements Carrier {
    public sendMessege(messege: String) {
        console.log(`TEXT MESSEGE: ${messege}`);
    }
}