import House from "./House";

export default abstract class Carpenter {

    protected house: House;

    constructor(house?: House) {
        this.house = house || new House;
    }

    public getHouse(): string {
        return this.house.__toString();
    }

    public generateLayout(width: number, height: number): void {
        this.house.layout = [];
        for (let i=0; i<height; i++) {
            this.house.layout[i] = [];
            for (let j=0; j<width; j++) {
                this.house.layout[i][j] = "  ";
            }
        }
    }

    public outside(width: number, height: number): void {
        // Generate layout
        // this.house.layout = Array(height).fill((Array(width)).fill(" "));
        this.generateLayout(width, height);
        this.topOutsideWall(width, height);
        this.leftOutsideWall(width, height);
        this.rightOutsideWall(width, height);
        this.bottomOutsideWall(width, height);
    }

    public abstract wall(row: any, column: any, wallType: string): void;
    public abstract sidewall(row:any, column: any): void;
    public abstract door(row: any, column: any, wallType: string): void;
    public abstract blank(row:any, column: any): void;
    public abstract label(row: any, column: any, label: string): void;
    public abstract topOutsideWall(width: number, height: number): void;
    public abstract leftOutsideWall(width: number, height: number): void;
    public abstract rightOutsideWall(width: number, height: number): void;
    public abstract bottomOutsideWall(width: number, height: number): void;


    protected items(rows: any, columns: any, item: string): void {
        var new_rows = Array.isArray(rows) ? rows : [rows];
        var new_columns = Array.isArray(columns) ? columns : [columns];
        
        new_rows.map(row => {
            new_columns.map(col => {
                this.assertInBounds(row, col);
                this.house.layout[row][col] = item;
            });
        });
    }

    protected assertInBounds(row: number, column: number): void {
        if (row < 0 || column < 0
            || row > this.house.layout.length
            || column > this.house.layout[row].length) 

            throw new Error(`Can not modify this location on canvas: (${row}, ${column})`);
    }
}