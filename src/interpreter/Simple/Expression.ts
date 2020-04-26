import Context from "./Context";

export default class Expression {
    protected name: string;
    protected one: string;
    protected four: string;
    protected five: string;
    protected nine: string;
    protected multiplier: number;

    constructor(
        name: string,
        one: string,
        four: string,
        five: string,
        nine: string,
        multiplier: number
    ) {
        this.name = name;
        this.one = one;
        this.four = four;
        this.five = five;
        this.nine = nine;
        this.multiplier = multiplier;
    }

    interpret(context: Context): void {
        if (context.getInput().length == 0) {
            return;
        }
        else if (context.startsWith(this.nine)) {
            context.setOutput(context.getOutput() + this.multiplier * 9);
            context.setInput(context.getInput().substr(2));
        }
        else if (context.startsWith(this.four)) {
            context.setOutput(context.getOutput() + this.multiplier * 4);
            context.setInput(context.getInput().substr(2));
        }
        else if (context.startsWith(this.five)) {
            context.setOutput(context.getOutput() + this.multiplier * 5);
            context.setInput(context.getInput().substr(1));
        }
        while (context.startsWith(this.one)) {
            context.setOutput(context.getOutput() + this.multiplier * 1);
            context.setInput(context.getInput().substr(1));
        }
    }
}