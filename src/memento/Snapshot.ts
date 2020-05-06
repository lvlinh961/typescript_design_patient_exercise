export default class Snapshot {
    protected items: any[];

    constructor(items: any[]) {
        this.items = items;
    }

    public getItems(): any[] {
        return this.items;
    }
}