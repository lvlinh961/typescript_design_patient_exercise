/**
 * The FlyweightFactory create and manages the Flyweight objects. It ensures that flyweight are shared correctly.
 * When the client requests a flyweight, the factory either return a existing instance or create new one, if it
 * doesn't exist yet.
 */

import Flyweight from "./Flyweight";

export default class FlyweightFactory {
    private flyweights: {[key: string]: Flyweight} = <any>{};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    /**
     * Return a Flyweight's string hash for a given state.
     * @param state 
     */
    private getKey(state: string[]): string {
        return state.join('_');
    }

    /**
     * Return an existing Flyweight with given state or create new one.
     * @param sharedState
     */
    public getFlyweight(sharedState: string[]):Flyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log('FlyweightFactory: Can\'t not find flyweight, create new one');
            this.flyweights[key] = new Flyweight(sharedState);
        }
        else {
            console.log('FlyweightFactory: Reusing existing flyweight.');
        }

        return this.flyweights[key];
    }

    public listFlyweight(): void {
        const count = Object.keys(this.flyweights).length;

        console.log(`\nFlyweightFactory: I have ${count} flyweights.`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}