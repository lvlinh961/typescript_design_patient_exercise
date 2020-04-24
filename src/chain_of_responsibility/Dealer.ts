import Client from "./Client";

export default abstract class Dealer {
    protected boss: Dealer;
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public abstract dealWith(client: Client): void;

    public setBoss(dealer: Dealer): void {
        this.boss = dealer;
    }

    protected shoot(client: Client): void {
        console.log(`Dealer: ${client.getName()} got shot by ${this.name}`);
    }

    protected serve(client: Client): void {
        console.log(`Dealer: ${client.getName()} got ${client.getRequest()} from ${this.name}`);
    }

    protected letBossDealWith(client: Client) {
        if (this.boss) this.boss.dealWith(client);
    }

    protected convertRequestToGrams(client: Client): number {
        var grams = 0;

        var result = client.getRequest().split(' ');
        var quantity, mass;

        if (result.length > 1) {
            quantity = result[0];
            mass = result[1];
        }
        else {
            quantity = 1;
            mass = result[0];
        }

        switch (mass) {
            case "gram":
            case "grams": grams = quantity;
            break;

            case "eighth":
            case "eighths": grams = quantity * 3.5;
            break;

            case "quad":
            case "quads": grams = quantity * 7;
            break;

            case "ounce":
            case "ounces": grams = quantity * 28;
            break;

            case "kilo":
            case "kilos": grams = quantity * 1000;
            break;
        }
        
        return grams;
    }
}