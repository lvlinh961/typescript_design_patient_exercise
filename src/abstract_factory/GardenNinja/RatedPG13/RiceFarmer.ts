import Merchant from "../Merchant";
import RiceGarden from "./RiceGarden";
import RiceStore from "./RiceStore";

export default class RiceFarmer extends Merchant {
    createStore() {
        return new RiceStore();
    }

    createGardent() {
        return new RiceGarden();
    }
}