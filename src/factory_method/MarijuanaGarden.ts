import Garden from "./Garden";
import Plant from "./Plant";
import Marijuana from "./Marijuana";

export default class MarijuanaGarden extends Garden {

    harvest(): Array<Plant> {
        return [new Marijuana, new Marijuana];
    }

}