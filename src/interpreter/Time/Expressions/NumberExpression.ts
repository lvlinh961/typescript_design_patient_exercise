import BaseExpression from "./BaseExpression";
import TimeContext from "../TimeContext";
import NumberParser from "../../Support/NumberParser";

// <number> ::= '1' | '2' | ... | '23' | 'one' | 'two' | ... | 'twenty three'
export default class NumberExpression implements BaseExpression {
    protected literal: string;
    protected numberParser: NumberParser;

    constructor(literal: string) {
        this.literal = literal;
        this.numberParser = new NumberParser;
    }

    public interpret(context: TimeContext): string {
        return this.numberParser.toNumber(this.literal);
    }
}