import Menu from "./Menu";

export default class MenuCollection implements Menu {
    protected children: Array<Menu> = [];

    public add(menu: Menu) {
        this.children.push(menu);
    }

    public output(level: number = 0) {
        console.log(`${' '.repeat(level*4)}<div class=""sub-menu level-${level}>`);
        this.children.map(child => {
            child.output(level+1);
        });
        console.log(`${' '.repeat(level*4)}</div>`);
    }
}