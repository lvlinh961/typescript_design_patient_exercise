import Lungs from "./Lungs";

export default class Sheep {

    public name: string;
    public lungs: Lungs;

    constructor(lungs: Lungs) {
        this.name = "Big momma";
        this.lungs = lungs;
    }

    public applyVirus(): void {
        this.lungs.setHealth(20);
    }

    public clone(): Sheep {
        const clone = Object.create(this);
        clone.lungs = Object.create(this.lungs);
        return clone;
    }
}