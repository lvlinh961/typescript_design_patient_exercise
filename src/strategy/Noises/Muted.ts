import Noise from "./Noise";

export default class Muted implements Noise {
    public make(): string {
        return "";
    }
}