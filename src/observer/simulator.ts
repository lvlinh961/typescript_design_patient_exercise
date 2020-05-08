/**
 * @author lvlinh96
 * 
 * Implement Observer pattern
 * 
 * Pattern intent: Define a one-to-many dependency between object so that when one object change state, all its 
 * dependents are notidied and updated automatically
 * 
 * The first drawback is that observers are decoupled from the subject. The subject keeps an array of observers. 
 * The subject knows very little about its observers. It calls them when state changes. While this offers powerful 
 * flexibility, this can also be a drawback. The observer has to be attached to the subject in some place. Where you 
 * register is arbitrary. It could be in some bootstrap file, a service provider, or even the some custom file you’ve 
 * made. Imagine you have many different observers attached to a subject and these attachments are all spread out into 
 * many different files. It becomes troublesome to manage what observers are attached to the subject.
 * 
 * The other drawback is that state changes become more complex. When the state changes on a subject, observers are 
 * called. Each observer is unaware of the other. If you have 15 observers attached to a subject, then each observer 
 * works unaware of what its 14 siblings are doing. This type of code is hard to optimize. For example, what if all 
 * 15 observers save to the database? Thus any time you make one change to the subject, you end up with 16 database 
 * changes. If there are problems, this can be hard to debug! You’d have to track down each observer and figure out 
 * which one is the culprit.
 */

import ConcreteSubject from "./ConcreteSubject";
import ConcreteObserverA from "./ConcreteObserverA";
import ConcreteObserverB from "./ConcreteObserverB";

const subject = new ConcreteSubject;

const observerA = new ConcreteObserverA;
subject.attach(observerA);

const observerB = new ConcreteObserverB;
subject.attach(observerB);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observerB);

subject.someBusinessLogic();