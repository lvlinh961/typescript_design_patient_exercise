import Noise from "./Noise";

export default class HenNoise implements Noise {
    public make(): string {
        return "cluck, cluck, BA-cawk!\n";
    }
}