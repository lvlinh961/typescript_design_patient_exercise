import Plant from "../Plant";

export default class Drug implements Plant {
    public price = 100;

    __toString(): string {
        return "It's a marijuana plant, home slice!";
    }
}