/**
 * The RealSubject contain some core business logic. Usually, RealSubject capaple of doing some useful work
 * which may also be very slow or sensitive - e.g. correcting input data. A Proxy can solve these issue without
 * any change to the RealSubject's code.
 */

import Subject from "./Subject";

 export default class RealSubject implements Subject {
     public request(): void {
         console.log("RealSubject: handling request.");
     }
 }