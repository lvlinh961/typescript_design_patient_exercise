import Menu from "./Menu";

export default class MenuItem implements Menu {
    public name: String;

    constructor(name: String) {
        this.name = name;
    }

    public output(level: number = 0) {
        console.log(`${' '.repeat(level*4)}${this.name}`);
    }
}