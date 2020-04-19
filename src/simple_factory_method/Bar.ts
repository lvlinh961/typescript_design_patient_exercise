export default class Bar {
    protected var1: string;
    protected var2: string;

    constructor(var1: string, var2: string) {
        this.var1 = var1;
        this.var2 = var2;
    }

    __toString(): String {
        return `This is Bar with variables: ${this.var1} and ${this.var2}`;
    }
}