/**
 * @author lvlinh96
 * 
 * Implements Command pattern
 * 
 * Pattern intent: Encapsulate a request as an object, thereby letting you parameterize clients with difference
 * request, queue or log requests, and support undoable operations.
 */

import Television from "./Television.ts/Television";
import RemoteControl from "./Television.ts/RemoteControl";
import ChangeVolume from "./Television.ts/ChangeVolume";

var tv = new Television;
var control = new RemoteControl;
var volumeUp = new ChangeVolume(tv, 1);
var volumeUpFour = new ChangeVolume(tv, 4);
var volumeDown = new ChangeVolume(tv, -1);

control.invoke(volumeUp); // 1
control.invoke(volumeUp); // 2
control.invoke(volumeDown); // 1
control.invoke(volumeUp); // 2
control.invoke(volumeUp); // 3
control.invoke(volumeDown); // 2
control.invoke(volumeUpFour); // 6
control.invoke(volumeUpFour); // 10
control.invoke(volumeUp); // 11
control.invoke(volumeUp); // 12
control.invoke(volumeUp); // 13

control.invoke(volumeUp); // 14
control.invoke(volumeUp); // 15
control.invoke(volumeUp); // 16
control.invoke(volumeDown); // 15

console.log(`Client: current TV volume: ${tv.getVolume()}`);

control.undo(4);

console.log(`Client: current TV volume: ${tv.getVolume()}`);

control.undo(6);

console.log(`Client: current TV volume: ${tv.getVolume()}`);