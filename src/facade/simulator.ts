/**
 * @author lvlinh96
 * 
 * Implements Facade pattern
 * 
 * Pattern intent: Provide a unified interface for a set of interface in a subsystem. Facade defines a
 * heigher-level interface that make a subsystem easier to use
 * 
 * The fundamental difference between facade and adapter is intent. 
 * The facade interface is not predetermined like the adapter interface. In an adapter, you can’t name your 
 * methods willy-nilly because you have a client that expects a specific interface. The facade can name the 
 * methods whatever makes the most sense and hopefully whatever encourages the simplest usage for clients of the 
 * facade.
 * 
 * Furthermore, adapters aren’t about taking complex layers and simplifying. They are about taking one layer 
 * and transforming it into another that the client already expects. Where the adapter pattern is analogous to 
 * an HDMI-to-DVI adapter, the facade pattern is much like having the HDMI output connected to a motherboard and 
 * its subcircuits. You don’t need to know how the circuitry works together; you simply plug your cable into the 
 * HDMI interface and let the engineers worry about the underlying parts. 
 * In short, adapters convert layers, and facades hide them.
 * 
 * A drawback to this pattern is that the facade is dependent on a wide variety of classes. If something changes 
 * in the underlying system, it can spell trouble for your facade
 */

import PatternExecutor from "./PatternExecutor";

var patternExecutor = new PatternExecutor;
patternExecutor.random();