import Dealer from "./Dealer";
import Client from "./Client";

export default class GramDealer extends Dealer {
    public dealWith(client: Client): void {
        const amount = this.convertRequestToGrams(client);

        if (amount < 1) return;

        if (amount > 3) return this.letBossDealWith(client);

        return this.serve(client);
    }
}