import Garden from "./Garden";
import Plant from "./Plant";
import Corn from "./Corn";
import Potato from "./Potato";
import Squash from "./Squash";

export default class VegetableGarden extends Garden {

    harvest(): Array<Plant> {
        return [new Corn, new Potato, new Squash];
    }

}