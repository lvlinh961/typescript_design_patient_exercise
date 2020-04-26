import BaseExpression from "./BaseExpression";
import TimeContext from "../TimeContext";

// <unit> ::= 'seconds' | 'second' | 'minutes' | 'minute' | 'hour' | 'hours' | 'days' | 'day' |
export default class UnitExpression implements BaseExpression {
    protected unit: string;

    constructor(unit: string) {
        this.unit = unit;
    }

    public interpret(context: TimeContext): string {
        return this.unit;
    }
}