/**
 * @author lvlinh96
 * 
 * Implement Visitor pattern
 * 
 * Pattern intent: represent an operation to be performed on the elements of an object structure. Visitor lets you
 * define a new operation without changing the classes of the elements on which it operates.
 * 
 * The main drawback to visitor pattern is that every time you add a new Visitable type you have to create a 
 * new visit<NewType> operation in every Visitor class available. 
 */

import Woman from "./Woman";
import PokeVisitor from "./PokeVisitor";
import TickleVisitor from "./TickleVisitor";
import Chicken from "./Chicken";

var woman = new Woman("Sally");
woman.accept(new PokeVisitor);
woman.accept(new TickleVisitor);

var chicken = new Chicken("Dominecker");
chicken.accept(new PokeVisitor);
chicken.accept(new TickleVisitor);