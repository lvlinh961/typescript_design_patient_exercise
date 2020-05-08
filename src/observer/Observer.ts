import Subject from "./Subject";

/**
 * The Observer interface declares the method, used by subjects.
 */
export default interface Observer {
    // Receive update from subject.
    update(subject: number): void;
}