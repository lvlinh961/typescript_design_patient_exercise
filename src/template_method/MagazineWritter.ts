import Writter from "./Writter";

export default class MagazineWritter extends Writter {
    public draft(): string {
        var document = "magazine";

        console.log(`drafting ${document} document\n`);

        return document;
    }

    public failsReview(document: string): boolean {
        console.log(`reviewing ${document} document\n`);

        return false;
    }

    public revise(document: string): string {
        console.log(`revising ${document} document\n`);

        return document;
    }
}