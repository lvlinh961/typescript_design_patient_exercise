import Snapshot from "./Snapshot";

export default interface Snapshots {
    snapshot(): void;
    restore(snapshot: Snapshot): void;
}