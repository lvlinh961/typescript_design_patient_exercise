import * as _ from "lodash";
import Carpenter from "./Carpenter";

export default class Architect {

    public createMyOldHouse(builder: Carpenter): void {
        // house foundation
        builder.outside(25, 13);
        
        // master bedroom
        builder.sidewall(5, _.range(1, 9));
		builder.wall(_.range(1, 5), 10, 'left side');
		builder.wall(_.range(2, 5), 5, 'left side');
		builder.door(5, 4, 'left bottom');
		builder.door(1, 5, 'left bottom');
        builder.door(5, 9, 'left bottom');
        
        // pathrooms
        builder.sidewall(2, _.range(6, 9));

        // bedroom 2
        builder.wall(_.range(8, 11), 10, 'left side');
		builder.wall(8, 7, 'left side');
		builder.wall(_.range(8, 11), 5, 'left side');
		builder.sidewall(7, _.range(1, 9));
		builder.blank(7, 6);
        builder.door(8, 6, 'entry right');
        
        // bedroom 3
        builder.blank(7, 4);
		builder.door(8, 4, 'left entry');
        builder.wall(8, 3, 'right side');
        
        // living room closets
        builder.wall(11, 14, 'left wall');
		builder.wall(10, 14, 'left side');
		builder.wall(_.range(10, 11), 15, 'left side');
		builder.wall(_.range(10, 11), 17, 'left side');
		builder.sidewall(9, _.range(14, 18));
		builder.door(9, 16, 'entry right');
        builder.door(11, 14, 'entry right');
        
        // Kitchen area
        builder.sidewall(5, 19);
		builder.wall(_.range(6, 12), _.range(19, 20), 'left side');
		builder.sidewall(5, 23);
        builder.wall(_.range(6, 12), 23, 'left side');
        
        // Laundry area
        builder.door(11, 21, 'entry right');
        builder.sidewall(10, 22);
        
        // front exterior door
        builder.wall(12, 10, 'left wall');
		builder.door(12, 11, 'left entry');
        builder.blank(12, 12);
        
        // Back exterior door
        builder.door(1, 15, 'left entry');
        builder.blank(0, 15);
        
        // Master bedroom closet
        builder.blank(5, 1);
        builder.wall(6, 2, 'left side');
        
        // Hallway closet
        builder.sidewall(6, 1);
        builder.door(7, 2, 'left wall');
        
        // Labels for rooms
        builder.label(3, 2, 'MB');
		builder.label(1, 7, 'Ba');
		builder.label(4, 7, 'Ba');
		builder.label(10, 2, 'Br');
		builder.label(10, 7, 'Br');
		builder.label(5, 14, 'LR');
		builder.label(8, 21, ' K');
		builder.label(11, 22, ' U');
    }

}