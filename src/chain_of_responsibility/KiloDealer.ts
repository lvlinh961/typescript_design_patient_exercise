import Dealer from "./Dealer";
import Client from "./Client";

export default class KiloDealer extends Dealer {
    public dealWith(client: Client): void {
        if (!client.getNarc()) return this.serve(client);
    }
}