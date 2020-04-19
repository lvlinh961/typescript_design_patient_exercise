import Bar from "./Bar";
import Baz from "./Baz";

export default class Foo {
    public bar: Bar;
    public baz: Baz;

    constructor(bar: Bar, baz: Baz) {
        this.bar = bar;
        this.baz = baz;
    }
}