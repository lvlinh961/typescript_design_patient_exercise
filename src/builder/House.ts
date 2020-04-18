export default class House {

    public layout: Array<Array<string>>;

    public __toString(): string {
        var str = "";
        var rows = this.layout;

        rows.map(row => {
            row.map(col => {
                str += col;
            });
            str += "\n";
        });
        
        return str;
    }
}