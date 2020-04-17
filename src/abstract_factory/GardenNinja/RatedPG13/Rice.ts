import Plant from "../Plant";

export default class Rice implements Plant {
    public price = 10;
    
    __toString(): string {
        return "It's rice for you";
    }
}