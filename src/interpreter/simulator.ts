/**
 * @author lvlinh96
 * 
 * Implement Interpreter pattern
 * 
 * Pattern intent: Given a language, define a representation for its grammar along with an interpreter that
 * uses the representation to interpret sentences in the language.
 */

import TimeContext from "./Time/TimeContext";
import GuageExpression from "./Time/Expressions/GaugeExpression";
import UnitExpression from "./Time/Expressions/UnitExpression";
import DirectionExpression from "./Time/Expressions/DirectionExpression";
import TimeExpression from "./Time/Expressions/TimeExpression";
import MeasurementExpression from "./Time/Expressions/MeasurementExpression";
import NumberExpression from "./Time/Expressions/NumberExpression";

var context = new TimeContext(new Date('2015-01-31 12:34:56'));
console.log(`Client - time for now ${context.getTimeAsString()}`);

//
// a few hours in the past: 2015-01-31 09:34:56
//
var guage = new GuageExpression('a few', new UnitExpression('hours'));
var direction = new DirectionExpression('in the past');
var time = new TimeExpression(guage, direction);
console.log(`Client - a few hours in the past: ${time.interpret(context)}`);

//
// thirty days ago:         2015-01-01 09:34:56
//
var measurementExpression = new MeasurementExpression(new NumberExpression('thirty'), new UnitExpression('days'));