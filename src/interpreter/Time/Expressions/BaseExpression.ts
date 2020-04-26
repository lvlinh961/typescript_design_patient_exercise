import TimeContext from "../TimeContext";

export default interface BaseExpression {
    interpret(context: TimeContext): string;
}