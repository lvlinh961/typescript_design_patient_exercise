import Command from "./Command";
import Television from "./Television";

export default class ChangeVolume implements Command {
    protected tv: Television;
    public delta: number;

    constructor(tv: Television, delta: number = 1) {
        this.tv = tv;
        this.delta = delta;
    }

    public fire(): void {
        var volume = this.tv.getVolume();
        console.log(`Change Volume command: fire ${this.delta} volume`);
        this.tv.setVolume(volume + this.delta);
    }

    public undo(): void {
        var volume = this.tv.getVolume();
        console.log(`Change Volume command: undo ${this.delta} volume`);
        this.tv.setVolume(volume - this.delta);
    }
}