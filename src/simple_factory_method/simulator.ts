/**
 * @author lvlinh96
 * 
 * Implements Simple Factory Method pattern
 * 
 * Pattern intent: The simple factory method simplifies the proccess of creating new concrete object
 * 
 * This pattern can be applied when you want to create an object that have dependencies
 * This pattern can be used to refactor place in code where products are created
 */

import Factory from "./Factory";

var foo = Factory.Foo();

console.log(foo.bar.__toString());
console.log(foo.baz.__toString());