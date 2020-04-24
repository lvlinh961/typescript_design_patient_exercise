/**
 * @author lvlinh96
 * 
 * Implements Chain of Responsibility pattern
 * 
 * Pattern intent: Avoid coupling the sender of a request to its receiver by giving more than one object a chance
 * to handle the request. Chain the receiving object and pass the request along the chain unitl an object handle it.
 */

import GramDealer from "./GramDealer";
import EighthDealer from "./EighthDealer";
import QuadDealer from "./QualDealer";
import OunceDealer from "./OunceDealer";
import KiloDealer from "./KiloDealer";
import Client from "./Client";

//  Create dealer
var grouchyOscar = new GramDealer('Grouchy Oscar');
var dealer2 = new EighthDealer('Sniffy');
var dealer3 = new QuadDealer('Kabby');
var dealer4 = new OunceDealer('AC Countant');
var dealer5 = new KiloDealer('The Big Bad Bird');

// Setup the chain of responsibility
grouchyOscar.setBoss(dealer2);
dealer2.setBoss(dealer3);
dealer3.setBoss(dealer4);
dealer4.setBoss(dealer5);

// All deal start with grouchy
grouchyOscar.dealWith(new Client('Red Eye Mos', '2 grams'));
grouchyOscar.dealWith(new Client('EarnEz', 'ounce'));
grouchyOscar.dealWith(new Client('Tellme Fatz', 'quad'));
grouchyOscar.dealWith(new Client('Cookie Hipster', 'cookie'));
grouchyOscar.dealWith(new Client('Zo 2 Easy', '99 grams'));
grouchyOscar.dealWith(new Client('Bertie', '4 eighths', true));
grouchyOscar.dealWith(new Client('Seth Rogen', '2 kilos'));

// Sniffy and Kabby are taken out of play because Bertie busted
grouchyOscar.setBoss(dealer4);

// Bertie the Narc gets greedy and gets shot
grouchyOscar.dealWith(new Client('Bertie', 'kilo', true));