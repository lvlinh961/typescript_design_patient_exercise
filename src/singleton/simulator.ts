/**
 * @author lvlinh96
 * 
 * Implements Singleton pattern
 * 
 * Pattern intent: Ensure a class only has one instance and provide a global point of access to it.
 */

import Singleton from "./Singleton";

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

if (s1 === s2) {
    console.log("Singleton work, both variables contain the same instance");
}
else {
    console.log("Singleton failed, variables contain different instances");
}