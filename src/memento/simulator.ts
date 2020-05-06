/**
 * @author lvlinh96
 * 
 * Implement Memento pattern
 * 
 * Pattern intent: without violating encapsulation, capture and externalize an object's internal state so that the object
 * can be restored to this state later.
 * 
 * In software design, you strive to create a hundred different cake machines with just one button rather than one 
 * cake machine with a hundred buttons. 
 * 
 * The more public methods you create for your classes, the more responsibilities you add. this is why you use the 
 * memento pattern rather than exposing private variables.
 * 
 * There are some downsides to the memento pattern. The cost of creating memento objects can be memory intensive when 
 * the originator object has a lot of data to store. The second downside of this pattern is that you are adding more 
 * responsibilities to the originator object.
 * 
 * You’ve learned alternatives to the memento pattern, too. All in all, this pattern can likely be replaced by 
 * serialization alternative, provided you don’t need any extra flexibility when creating your snapshots.
 */

import Person from "./Person";

var person = new Person;

person['name'] = "Kelt";

var snapshot1 = person.snapshot();

person['name'] = 'test name';
person['email'] = 'something@testing.vn'

var snapshot2 = person.snapshot();

console.log("Client - this is how person looks now: ", person);

person.restore(snapshot1);

console.log("Client - restore snapshot1:  ", person);

person.restore(snapshot2);

console.log("Client - restore snapshot1:  ", person);