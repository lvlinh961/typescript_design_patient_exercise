/**
 * The proxy has an interface idential to the RealSubject
 */

import Subject from "./Subject";
import RealSubject from "./RealSubject";

export default class Proxy implements Subject {
    private realSubject: RealSubject;

    /**
     * The Proxy maintains a reference to an object of the RealSubject class. It can be either lazy-loaded or pass
     * to the Proxy via client.
     * @param realSubject 
     */
    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    /**
     * The most common applications of Proxy pattern are lazy loading, caching controlling the access, logging, 
     * etc. A Proxy can perform one of the things and then, depending on the result, pass the execution to the
     * same method in a linked RealSubject object.
     */
    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        // Some real check should go here
        console.log('Proxy: checking access prior to firing a real request.');

        return true;
    }

    private logAccess(): void {
        console.log('Proxy: logginf the time of request.');
    }
}