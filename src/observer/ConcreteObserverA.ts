import Observer from "./Observer";

export default class ConcreteObserverA implements Observer {
    public update(state: number): void {
        if (state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}