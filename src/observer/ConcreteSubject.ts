import Subject from "./Subject";
import Observer from "./Observer";

/**
 * The Subject owns some important state and notifies observers when the state
 * changes.
 */
export default class ConcreteSubject implements Subject {
    /**
     * @type {number} For the sake of simplicity, the Subject's state, essential
     * to all subscribers, is stored in this variable.
     */
    public state: number;

    /**
     * @type {Obserser[]} List of subscribers. In real life,  the list of observers can be stored more comprehensively
     * (categorized by event type, etc ...)
     */
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);

        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);

        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    /**
     * Trigger an update on each subscriber.
     */
    public notify(): void {
        console.log('Subject: Notifying observers...');

        for (const observer of this.observers) {
            observer.update(this.state);
        }
    }

    /**
     * Usually, the subscription logic is only a fraction of what a Subject can
     * really do. Subjects commonly hold some important business logic, that
     * triggers a notification method whenever something important is about to
     * happen (or after it).
     */
    public someBusinessLogic(): void {
        console.log('\ConcreteSubject: I\'m doing something important.');

        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);

        this.notify();
    }

    public getState(): number {
        return this.state;
    }
}