import BaseExpression from "./BaseExpression";
import TimeContext from "../TimeContext";

// <time> ::= <gauge> <direction>
export default class TimeExpression implements BaseExpression {
    protected guage: BaseExpression;
    protected direction: BaseExpression;

    constructor(guage: BaseExpression, direction: BaseExpression) {
        this.guage = guage;
        this.direction = direction;
    }

    public interpret(context: TimeContext): string {
        var guage = this.guage.interpret(context);
        var direction = this.direction.interpret(context);

        if (direction.length > 0) {
            var time = context.getTime();
            /**
             * STUCK HERE
             * 
             * Needed a argorithm to modify time according to direction and gauge
             * Examle in PHP:
             * 
             * time.modify(direction . guage);
             */
            context.setTime(time);
        }

        return context.getTimeAsString();
    }
}