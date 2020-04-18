import * as _ from "lodash";
import Carpenter from "./Carpenter";

export default class NoviceCarpenter extends Carpenter {
    
    wall(row: number, column: number, wallType: string): void {
        this.items(row, column, this.wallChar(wallType));
    }

    sidewall(row: number, column: number): void {
        this.items(row, column, '--');
    }

    door(row: number, column: number, doorType: string): void {
        this.items(row, column, this.doorChar(doorType));
    }

    blank(row: number, column: number): void {
        this.items(row, column, '  ');
    }

    label(row: number, column: number, label: string): void {
        this.items(row, column, label);
    }

    topOutsideWall(width: number, height: number): void {
        this.items(0, _.range(width-1), '--');
    }

    leftOutsideWall(width: number, height: number): void {
        this.items(_.range(1, height-1), 0, '| ');
    }

    rightOutsideWall(width: number, height: number): void {
        this.items(_.range(1, height-1), width-1, " |");
    }

    bottomOutsideWall(width: number, height: number): void {
        this.items(height-1, _.range(0, width-1), '--');
        this.items(height - 1, 0, '|-');
    }
    
    public wallChar(wallType: string): string {
        switch (wallType) {
            case 'left side':	return '| ';
			case 'right side':  return ' |';
			case 'left wall':	return '|-';
			case 'right wall': 	return '-|';
        }

        return '  ';
    }

    public doorChar(doorType: string): string {
        switch (doorType)
		{
			case 'left entry': 	return '\\ ';
			case 'entry left':	return ' \\';
			case 'right entry':	return '/ ';
			case 'entry right':	return ' /';
			case 'left wall': 	return '\\-';
			case 'wall left': 	return '-\\';
			case 'right wall': 	return '/-';
			case 'wall right': 	return '-/';
		}

		return '  ';
    }

}