import Merchant from "../Merchant";
import DrugGarden from "./DrugGarden";
import DrugStore from "./DrugStore";

export default class DrugDealer extends Merchant {
    createGardent(): DrugGarden {
        return new DrugGarden();
    }

    createStore(): DrugStore {
        return new DrugStore();
    }
}