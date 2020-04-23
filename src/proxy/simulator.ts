/**
 * @author lvlinh96
 * 
 * Implements Proxy pattern
 * 
 * Pattern intent: Provide a surrogate or placeholder for another object to control access to it.
 * 
 * Virtual proxy: is used for constructing object only when they are needed
 * Remote proxy: are useful when you hace code running remotely but you want to treat it transparently as if it
 * running locally
 * Protection proxy: is use for protect things
 * Smart proxy: is used to tack on addittional
 * 
 * Drawback:
 *  - 
 */

import Subject from "./Subject";
import RealSubject from "./RealSubject";
import Proxy from "./Proxy";

 /**
  * The client code is supposed to work with all object (both subjects and proxies) via the Subject interface in
  * order to support both real subjects and proxies. In real life, however, clients mostly work with thier real
  * subjects directly. In this case, to implement the pattern most easily, you can extends your proxy from the
  * real subject's class.
  */

function clientCode(subject: Subject) {
    subject.request();
}

console.log('Client: executing the client code with a real subject.');
const realSubject = new RealSubject;
clientCode(realSubject);

console.log('\nClient: executing the client code with a proxy.');
const proxy = new Proxy(realSubject);
clientCode(proxy);