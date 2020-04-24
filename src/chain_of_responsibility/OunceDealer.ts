import Dealer from "./Dealer";
import Client from "./Client";

export default class OunceDealer extends Dealer {
    public dealWith(client: Client): void {
        const amount = this.convertRequestToGrams(client);

        if (amount > 1000) return this.letBossDealWith(client);

        return this.serve(client);
    }
}