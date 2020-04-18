/**
 * @author lvlinh96
 * 
 * Implement Builder pattern
 * 
 * Pattern intent: Separate the construction of the complex object from its representation so that the same construction process can create different
 * representation
 */

import Architect from "./Architect";
import ExpertCarpenter from "./ExpertCarpenter";
import NoviceCarpenter from "./NoviceCarpenter";

var director = new Architect;
var builder1 = new ExpertCarpenter;
var builder2 = new NoviceCarpenter;

console.log("--- Novice Carpenter ---");
director.createMyOldHouse(builder2);
console.log(builder2.getHouse());

console.log("--- Expert Carpenter ---");
director.createMyOldHouse(builder1);
console.log(builder1.getHouse());