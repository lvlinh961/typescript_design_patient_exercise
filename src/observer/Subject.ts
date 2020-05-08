import Observer from "./Observer";

/**
 * The Subject interface declares a set of methods for managing the subscribers.
 */
export default interface  Subject {
    // [x: string]: number;
    // Attach an observer to subject
    attach(observer: Observer): void;

    // Detach an obserber from subject
    detach(observer: Observer): void;

    // Notify all observers about a event
    notify(): void;
}