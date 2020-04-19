import Foo from "./Foo";
import Bar from "./Bar";
import Baz from "./Baz";

export default class Factory {
    public static Foo(bar?: Bar, baz?: Baz) {
        var objBar = bar || new Bar("test", "123");
        var objBaz = baz || new Baz();

        return new Foo(objBar, objBaz);
    }
}