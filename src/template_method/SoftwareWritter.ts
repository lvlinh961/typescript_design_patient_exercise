import Writter from "./Writter";

export default class SoftwareWritter extends Writter {
    public testedCount: number = 0;

    public draft(): string {
        var document = "software";

        console.log(`drafting ${document} program\n`);

        return document;
    }

    public failsReview(document: string): boolean {
        console.log(`do unit testing pass for ${document}\n`);

        return this.testedCount ++ < 3;
    }

    public revise(document: string): string {
        console.log(`correcting misstake for ${document} (revision #{${this.testedCount}})\n`);

        return document;
    }
}