/**
 * @author lvlinh96
 * 
 * Implement Interpreter pattern
 * 
 * Pattern intent: Given a language, define a representation for its grammar along with an interpreter that
 * uses the representation to interpret sentences in the language.
 * 
 * This is a simple version
 */

import Context from "./Simple/Context";
import Expression from "./Simple/Expression";

var roman = 'MCMXXVIII';

var context = new Context(roman);
var tree = [];

tree.push(new Expression('thousand', 'M', '', '', '', 1000));
tree.push(new Expression('hundred', 'C', 'CD', 'D', 'CM', 100));
tree.push(new Expression('ten', 'X', 'XL', 'L', 'XC', 10));
tree.push(new Expression('one', 'I', 'IV', 'V', 'IX', 1));

for (var i=0; i < tree.length; i++) {
    tree[i].interpret(context);
}

console.log(`Client: ${roman} = ${context.getOutput()}`);