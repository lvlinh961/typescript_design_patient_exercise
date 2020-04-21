/**
 * @author lvlinh96
 * 
 * Implements Decorator pattern
 * 
 * Pattern intent: Attach additional responsibilities to an object dynamically. Decorators provide a flexible
 * alternative to subclassing to extending functionality.
 */

import Zombie from "./Zombie";
import ExtremelyFast from "./ExtremelyFast";
import ExtremelySmart from "./ExtremelySmart";

var monster = new Zombie;

console.log(`This zombie stats are
    STR: ${monster.strength()}
    INT: ${monster.intelligence()}
    SPE: ${monster.speed()}
`);

//
// let's add some speed to the zombie
var fastMonster = new ExtremelyFast(monster);
console.log(`Decorated zombie stats are
    STR: ${fastMonster.strength()}
    INT: ${fastMonster.intelligence()}
    SPE: ${fastMonster.speed()}
    and it can now ${fastMonster.jumpAttack()}
`);

//
// now we add event more speed and intelligence to the zombie
//
fastMonster = new ExtremelyFast(fastMonster);
fastMonster = new ExtremelyFast(fastMonster);
var smartMonster = new ExtremelySmart(fastMonster);

console.log(`Decorated zombie stats are
    STR: ${smartMonster.strength()}
    INT: ${smartMonster.intelligence()}
    SPE: ${smartMonster.speed()}
    and it can now ${smartMonster.castSpell("fireball")}
`);

// notice that this would not work though downside of Decorator pattern

// $monster->jumpAttack();

// this is one of the downsides of Decorator pattern

// segue into presenter

// instead we use a variation of the Decorator pattern (some call it a Presenter)
// and utilize magic php methods like __call() and __get() and __set() to call methods
// that don't exist on the class, and traverse each parent up the inheritence chain
