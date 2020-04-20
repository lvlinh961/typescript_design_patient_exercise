import Menu from "./Menu";

export default class MenuLink implements Menu {
    protected name: String;
    protected url: String;

    constructor(name: String, url: String) {
        this.name = name;
        this.url = url;
    }

    public output(level: number = 0): void {
        console.log(`${' '.repeat(level*4)}<a title="${this.name}" href="${this.url}">${this.name}</a>`);
    }
}