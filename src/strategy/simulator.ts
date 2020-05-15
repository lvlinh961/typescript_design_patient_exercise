/**
 * @author lvlinh96
 * 
 * Implement Strategy pattern
 * 
 * Pattern intent: Define a family of algorithms, encapsulate each one and make them interchangeable. Strategy
 * lets the algorithms vary independently from clients that use it.
 * 
 * There are a couple of drawbacks to the strategy pattern. The client must know about the different strategy 
 * objects. This extra complexity is minimal and can be negated with a service container auto-resolving the 
 * dependency.
 * 
 * The next drawback is that you are increasing the number of classes in your application. Is that really a 
 * problem, though?
 */

import Chicken from "./Chicken";
import BabyChickNoise from "./Noises/BabyChickNoise";
import HenNoise from "./Noises/HenNoise";
import RoosterNoise from "./Noises/RoosterNoise";
import RubberChickenNoise from "./Noises/RubberChickenNoise";
import Muted from "./Noises/Muted";

var chicken1 = new Chicken(new BabyChickNoise);
chicken1.speak();

var chicken2 = new Chicken(new HenNoise);
chicken2.speak();

var chicken3 = new Chicken(new RoosterNoise);
chicken3.speak();

var chicken4 = new Chicken(new RubberChickenNoise);
chicken4.speak();

var chicken5 = new Chicken(new Muted);
chicken5.speak();