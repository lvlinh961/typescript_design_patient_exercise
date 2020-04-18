/**
 * @author lvlinh96
 * 
 * Implements Prototype pattern
 * 
 * Pattern intent: Specify the kind of object to create using a prototypical instance, and create new object
 * by copying this prototype
 * 
 * Use the prototype pattern when you want to fork and modify existing objects. A good use for this pattern 
 * is when you want to avoid the construction of a class that takes a lot of time or is complicated to create 
 * initially.
 */

import Sheep from "./Sheep";
import Lungs from "./Lungs";

var sheep = new Sheep(new Lungs);
var dolly = sheep.clone();
dolly.name = "Dooly Parton";
dolly.applyVirus();

console.log("Sheep: ", sheep);
console.log("Dolly: ", dolly);