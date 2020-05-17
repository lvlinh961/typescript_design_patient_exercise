import Visitor from "./Visitor";
import Woman from "./Woman";
import Chicken from "./Chicken";

export default class PokeVisitor implements Visitor {
    public visitWonman(woman: Woman): void {
        console.log(`Poke visitor - the woman named ${woman.getName()} was poked`);
    }

    public visitChicken(chicken: Chicken): void {
        console.log(`Poke visitor - the ${chicken.getType()} was poked`);
    }
}