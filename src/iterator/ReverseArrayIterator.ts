import IteratorAggregate from "./InteratorAggregate";

export default class ReverseArrayIterator implements IteratorAggregate {
    public list: any[];

    constructor(list: any[]) {
        this.list = list.reverse();
    }

    public getIterator(): any[] {
        return this.list;
    }
}