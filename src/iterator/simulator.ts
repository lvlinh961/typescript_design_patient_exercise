/**
 * @author lvlinh96
 * 
 * Implements Iterator pattern
 * 
 * Pattern intent: Provide a way to access the elements of an aggregate object sequentially without exposing
 * its underlying representation
 * 
 * The client uses the same interface for all the iterators and doesn’t have to worry about keeping up with some 
 * counter index within a for loop. The client just keeps asking for the next item until the iterator no longer 
 * provides any more. 
 */

import Moives from "./Moives";
import Moive from "./Movie";

var movies = new Moives;
movies.add(new Moive('Ponyo', 'G'));
movies.add(new Moive('Kill Bill', 'R'));
movies.add(new Moive('The Santa Clause', 'PG'));
movies.add(new Moive('Guardians of the Galaxy', 'PG-13'));
movies.add(new Moive('Reservoir dogs', 'R'));
movies.add(new Moive('Sharknado', 'PG-13'));
movies.add(new Moive('Back to the Future', 'PG'));

console.log("\n--- MOVIE LISTING ---");

for (var moive of movies.getIterator()) {
    console.log(`- ${moive.getTitle()}`);
}

// now we only print rated R movies
// with iterators it's easy as pie
console.log("\n--- RATE R MOVIE LISTING ---");
for (var moive of movies.reated('R')) {
    console.log(`- ${moive.getTitle()}`);
}