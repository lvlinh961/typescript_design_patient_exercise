export default class Moive {
    protected title: string;
    protected rating: string;

    constructor(title: string, rating: string) {
        this.title = title;
        this.rating = rating;
    }

    public getTitle(): string {
        return this.title;
    }

    public getRating(): string {
        return this.rating;
    }
}