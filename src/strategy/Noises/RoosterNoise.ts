import Noise from "./Noise";

export default class RoosterNoise implements Noise {
    public make(): string {
        return "cock-a-doodle-doo!\n";
    }
}