'use strict'

function Animal(name, legs, color){
	this.name = name;
	this.legs = legs;
	this.color = color;

	return {
		getColor: () => color,
		setColor: (newColor) => {color = newColor} 
	}
}

const dog = new Animal("dog", 4, 'red');

dog.setColor("green");

console.log(dog.getColor());


console.log(Object.getPrototypeOf(Animal));

class Perro extends Animal{
	constructor(){
		super("dog", 4, "white");
	}
}

const myAnotherDog = new Perro();

console.log(myAnotherDog.getColor());

console.log(Object.getPrototypeOf(Perro));
