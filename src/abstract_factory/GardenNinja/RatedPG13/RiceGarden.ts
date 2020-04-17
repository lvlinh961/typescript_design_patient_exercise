import Garden from "../Garden";
import Rice from "./Rice";

export default class RiceGarden implements Garden {
    items() {
        return [new Rice, new Rice];
    }
}