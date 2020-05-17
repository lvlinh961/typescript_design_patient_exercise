export default abstract class Writter {
    abstract draft(): string;
    abstract failsReview(document: string): boolean;
    abstract revise(document: string); string;

    public write(): string {
        var document = this.draft();

        while (this.failsReview(document)) {
            document = this.revise(document);
        }

        return document;
    }
}