/**
 * @author lvlinh96
 * 
 * Implement Abstract Factory pattern
 * 
 * Pattern Intent: Provide an interface for creating families of related or dependent object without specifying
 * their concrete classes
 */

import Client from "./GardenNinja/Client";
import RiceFarmer from "./GardenNinja/RatedPG13/RiceFarmer";
import DrugDealer from "./GardenNinja/RatedR/DrugDealer";

var ratings = [new RiceFarmer, new DrugDealer];

var merchant = ratings[Math.floor(Math.random() * ratings.length)];
const client = new Client(merchant);
client.run();