/**
 * @author lvlinh96
 * 
 * Implement Template Method pattern
 * 
 * Pattern intent: Define the skeleton of an algorithm in an operation, deferring some step to subclasses. The
 * template method lets subclasses redefine certain steps of an algorithm with out changing the algorithm's
 * structure.
 * 
 * One of the major drawbacks to the template method is complexity over time. In reality, as you add more 
 * concrete algorithms, the pattern becomes more difficult to maintain. What if above you added another 
 * publishing step for copyrights?
 * 
 * Please read the blog article at http://tech.puredanger.com/2007/07/03/pattern-hatetemplate/ for more drawbacks 
 * of the template pattern.
 */

import MagazineWritter from "./MagazineWritter";
import SoftwareWritter from "./SoftwareWritter";

var writter = new MagazineWritter;
writter.write();

console.log("--------------------------------");

writter = new SoftwareWritter;
writter.write();