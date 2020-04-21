import Store from "./Store";
import Garden from "./Garden";
import RiceFarmer from "./RatedPG13/RiceFarmer"

export default abstract class Merchant {
    public abstract createStore(): Store;
    public abstract createGardent(): Garden;

    public makeMoney(): number {
        var money = 0;
        var store = this.createStore();
        var items = this.createGardent().items();

        items.map(item => {
            money += store.price(item);
        });
        return money;
    }

    public static fromRating(): Merchant {
        return new RiceFarmer();
    }
}