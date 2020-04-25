export default class Television {
    protected volume: number = 0;

    public getVolume(): number {
        return this.volume;
    }

    public setVolume(volume: number): void {
        if (volume < 0) this.volume = 0;
        if (volume > 50) this.volume = 50;

        this.volume = volume;
        console.log(`Television: change volume to ${this.volume}`);
    }
}