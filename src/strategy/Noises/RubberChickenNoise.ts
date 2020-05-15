import Noise from "./Noise";

export default class RubberChickenNoise implements Noise {
    public make(): string {
        return "squeeek!\n";
    }
}