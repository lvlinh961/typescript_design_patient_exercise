export default class Context {
    protected input: string;
    protected output: number;

    constructor (input: string) {
        this.input = input;
        this.output = 0;
    }

    public getInput(): string {
        return this.input;
    }

    public setInput(input: string) {
        this.input = input;
    }

    public getOutput(): number {
        return this.output;
    }

    public setOutput(output: number) {
        this.output = output;
    }

    public startsWith(str: string): boolean {
        return this.input.substr(0, str.length) === str;
    }
}