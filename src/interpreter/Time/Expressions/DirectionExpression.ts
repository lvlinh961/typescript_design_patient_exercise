import BaseExpression from "./BaseExpression";
import TimeContext from "../TimeContext";

export default class DirectionExpression implements BaseExpression {
    protected literal: string;

    constructor(literal: string) {
        this.literal = literal;
    }

    public interpret(context: TimeContext): string {
        switch(this.literal) {
            case 'ago': return '-';
			case 'in the past': return '-';
			case 'in the future': return '+';
			case 'goes by': return '+';
			case '': return '+';
        }

        throw new Error(`DirectionExpression: Can not interpret literal: ${this.literal}`);
    }
}