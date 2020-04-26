import Movie from "./Movie";
import IteratorAggregate from "./InteratorAggregate";
import ReverseArrayIterator from "./ReverseArrayIterator";

export default class Moives implements IteratorAggregate {
    protected list: Movie[] = [];

    public add (movie: Movie) {
        this.list.push(movie);
    }

    public getIterator(): Movie[] {
        return this.list;
    }

    public reated(rating: string): Movie[] {
        return this.list.filter(movie => movie.getRating() == rating);
    }

    public reverse(): any[]{
        return new ReverseArrayIterator(this.list).getIterator();
    }
}