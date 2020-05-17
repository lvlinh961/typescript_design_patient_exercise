import Visitable from "./Visitable";
import Visitor from "./Visitor";

export default class Chicken implements Visitable {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    public getType(): string {
        return this.type;
    }

    public accept(visitor: Visitor): void {
        visitor.visitChicken(this);
    }
}