import Visitable from "./Visitable";
import Visitor from "./Visitor";

export default class Woman implements Visitable {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public accept(visitor: Visitor): void {
        visitor.visitWonman(this);
    }
}