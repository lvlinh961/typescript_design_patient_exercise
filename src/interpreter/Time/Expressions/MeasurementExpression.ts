import BaseExpression from "./BaseExpression";
import TimeContext from "../TimeContext";

// <measurement> ::= <number> <unit>
export default class MeasurementExpression implements BaseExpression {
    protected number: BaseExpression;
    protected unit: BaseExpression;

    constructor(number: BaseExpression, unit: BaseExpression) {
        this.number = number;
        this.unit = unit;
    }

    public interpret(context: TimeContext): string {
        return this.number.interpret(context) + this.unit.interpret(context);
    }
}