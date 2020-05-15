import Noise from "./Noises/Noise";

export default class Chicken {
    protected noise: Noise;

    constructor(noise: Noise) {
        this.noise = noise;
    }

    public speak(): void {
        console.log(`${this.noise.make()}\n`);
    }

    public scratch(): void {
        console.log("scratches some dirt\n");
    }
}