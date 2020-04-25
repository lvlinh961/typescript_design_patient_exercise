import Command from "./Command";

export default class RemoteControl {
    protected history: Command[];

    constructor() {
        this.history = Array<Command>();
    }

    public invoke(command: Command): void {
        this.history.push(command);

        command.fire();
    }

    public undo(amount: number = 1): void {
        while (amount-- > 0 && this.history.length > 0) {
            var command = this.history.pop();
            command.undo();
        }
    }
}