export default interface Command {
    fire(): void;

    undo(): void;
}