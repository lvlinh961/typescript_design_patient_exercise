import BaseExpression from "./BaseExpression";
import TimeContext from "../TimeContext";

// <gauge> ::=  'a few' <unit> | 'a short time' | 'a long time' | 'sometime soon' | <measurement>
export default class GuageExpression implements BaseExpression {
    protected expr1: string;
    protected expr2: BaseExpression;

    constructor(expr1: string, expr2?: BaseExpression) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    public interpret(context: TimeContext): string {
        if (context.hasVariable(this.expr1)) {
            return context.getVariable(this.expr1);
        }

        switch(this.expr1) {
            case 'a few': return '3 ' + this.expr2.interpret(context);
			case 'a short time': return '10 minutes';
			case 'a long time': return '2 years';
			case 'sometime soon': return '1 day';
        }

        return this.expr2.interpret(context);
    }
}