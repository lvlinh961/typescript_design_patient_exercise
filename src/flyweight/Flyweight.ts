/**
 * The flyweight stores a common portion of state (also call intrinsic state) that belong to multiple real
 * business entities. The Flyweight accept the rest of the state (extrinsic state, unique for each entity) via
 * its method parameters.
 */

export default class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState: any): void {
        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);

        console.log(`Flyweight: display shared (${s}) and unique (${u}) states.`);
    }
}