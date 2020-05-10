/**
 * @author lvlinh96
 * 
 * Implement State pattern
 * 
 * Pattern intent: Allow an object to alter its behavior when its internal state changes. The object will appear to
 * changes its class.
 * 
 * A downside to the state pattern is that it increases the number of classes to maintain. If you only have a couple of states and events within your design, 
 * it might not be worth the overhead. Rather than have multiple state classes, it might be easier to have a couple of conditional statements inside your 
 * client class.
 * 
 * The Gang of Four book mentions that if your states don’t hold internal variables, you don’t need to construct state classes over and over. 
 */

import VendingMechine from "./Example1/VendingMechine";

const mechine = new VendingMechine;

mechine.refund();

mechine.insert(50);

mechine.refund();

mechine.insert(100);

mechine.purchase("Mountain Dew");

mechine.insert(25);

mechine.purchase("Dr. Pepper");

mechine.purchase("Pepsi");