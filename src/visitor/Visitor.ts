import Woman from "./Woman";
import Chicken from "./Chicken";

export default interface Visitor {
    visitWonman(woman: Woman): void;
    visitChicken(chicken: Chicken): void;
}