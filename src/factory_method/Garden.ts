/**
 * @author lvlinh96
 * 
 * The abstract class that acts as the interface for all concrete garden
 */

import Plant from "./Plant";

export default abstract class Garden {
    
    public abstract harvest(): Array<Plant>;

    public grow(): Array<Plant> {
        var items = this.harvest();
        // items.shift();
        return items;
    }
}