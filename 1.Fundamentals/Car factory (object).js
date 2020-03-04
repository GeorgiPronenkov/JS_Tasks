/**
Write a JS program that assembles a car by given requirements out of existing components.
 The client will place an order in the form of an object describing the car.
 You need to determine which parts to use to fulfil the client’s order. You have the following parts in storage:
An engine has power (given in horsepower) and volume (given in cubic centimeters).
 Both of these values are numbers.
 When selecting an engine, pick the smallest possible that still meets the requirements.
Small engine: { power: 90, volume: 1800 }
Normal engine: { power: 120, volume: 2400 }
Monster engine: { power: 200, volume: 3500 }
A carriage has a type and color. Both of these values are strings. You have two types of carriages in storage and
 can paint it any color.
Hatchback: { type: 'hatchback', color: <as required> }
Coupe: { type: 'coupe', color: <as required> }
The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in inches.
 The size can only be an odd number. Round down any requirements you receive to the nearest odd number.
Input
You will receive an object as an argument to your function. The format will be as follows:
{ model: <model name>,
  power: <minimum power>,
  color: <color>,
  carriage: <carriage type>,
  wheelsize: <size> }
Output
Return the resulting car object as a result of your function. See the examples for details.
*/

function solve(obj) {

	//wheels
	let wheels = nearestOddWheelsSize();
	let [power, volume] = engineInfo();

	let car = {
		model: obj.model,
		engine: {
			power: power,
			volume: volume
		},
		carriage: {
			type: obj.carriage,
			color: obj.color
		},
		wheels: [wheels, wheels, wheels, wheels]
	};
	return car;


	function nearestOddWheelsSize() {

		let roundedDown = Math.floor(obj.wheelSize);
		return roundedDown % 2 !== 0 ? roundedDown : roundedDown - 1;
	}

	//engine

	function engineInfo() {

		let smallEngine = Math.abs(obj.power - 90);
		let normalEngine = Math.abs(obj.power - 120);
		let monsterEngine = Math.abs(obj.power - 200);
		let smallestValue = Math.min(smallEngine, normalEngine, monsterEngine);
		if (smallestValue === smallEngine) {
		    return[90, 1800];
		} else if (smallestValue === normalEngine) {
		    return [120, 2400];
		} else {
		    return [200, 3500];
		}
	}
}

console.log(solve({ model: 'Opel Vectra',
						power: 110,
						color: 'grey',
				     carriage: 'coupe',
					wheelSize: 17 }));
