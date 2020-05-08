import Observer from "./Observer";

export default class ConcreteObserverB implements Observer {
    public update(state: number): void {
        if (state === 0 || state >= 2) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}