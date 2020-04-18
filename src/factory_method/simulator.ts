/**
 * @author lvlinh96
 * 
 * Implement Factory Method pattern
 * 
 * Pattern intent: Define an interface for creating an object, but let subclasses decide which class to
 * instantiate. The Factory Method let a class defer instantiation to subclasses.
 */

import * as _ from "lodash";
import MarijuanaGarden from "./MarijuanaGarden";
import VegetableGarden from "./VegetableGarden";

var garden = _.random(0, 1) ? new MarijuanaGarden : new VegetableGarden;
var plants = garden.grow();

plants.map(plant => {
    plant.consume();
});