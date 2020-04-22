/**
 * @author lvlinh96
 * 
 * Implements Flyweight pattern
 * 
 * Pattern intent: Use sharing to support large number of fine-grained objects efficently
 * 
 * A drawback of the flyweight pattern is that it leads to more complicated code. It might not be worth the 
 * additional layer of complexity. You should always check to see how much memory is saved by using the 
 * flyweight. Sometimes the memory freedom gained is simply not worth the extra complexity of using a flyweight.
 * 
 * The client code usually create a bunch of pre-populated flyweights in the initialization stage of application.
 */

import FlyweightFactory from "./FlyweightFactory";

const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white'],
    // ...
]);
factory.listFlyweight();

function addCarToPoliceDatabase(
	ff: FlyweightFactory, plates: string, owner: string,
	brand: string, model: string, color: string
) {
	console.log('\nClient: Adding car to database.');
	const flyweight = ff.getFlyweight([brand, model, color]);

	// The client also either stores or calculates extrinsic state and pass it to the flyweight's method.
	flyweight.operation([plates, owner]);
}

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');

factory.listFlyweight();