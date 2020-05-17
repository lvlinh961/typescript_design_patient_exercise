import Visitor from "./Visitor";
import Woman from "./Woman";
import Chicken from "./Chicken";

export default class TickleVisitor implements Visitor {
    public visitWonman(woman: Woman): void {
        console.log(`Tickle visitor - the woman named ${woman.getName()} was tickled`);
    }

    public visitChicken(chicken: Chicken): void {
        console.log(`Tickle visitor - the ${chicken.getType()} was tickled`);
    }
}