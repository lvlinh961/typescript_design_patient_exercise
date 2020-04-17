import Garden from "../Garden";
import Drug from "./Drug";

export default class DrugGarden implements Garden {
    items(): Drug[] {
        return [new Drug, new Drug];
    }
}