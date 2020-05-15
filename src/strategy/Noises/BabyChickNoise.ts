import Noise from "./Noise";

export default class BabyChickNoise implements Noise {
    public make(): string {
        return "chirp, chrip\n";
    }
}