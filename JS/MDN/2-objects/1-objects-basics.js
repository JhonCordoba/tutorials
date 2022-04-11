"use strict";

// const person = {}; if(person){...} //person is a true value...
//we can create a empty object, then we can add properties and methods.


const person = {
	//name: ["Bob", "Smith"],
	name: {
		first: "Bob",
		second: "Smith"
	},
	age: 32,
	bio: function(){ //it's better the syntax: bio(){...}
		//console.log(`${ this.name[0] } ${ this.name[1] } is ${ this.age }  years old.`);
		console.log(`${ this.name.first } ${ this.name.second } is ${ this.age }  years old.`);
	},

	introduceSelf: function(){
		console.log(`Hi! I'm ${this.name.first}. `);
	}
}

console.log(typeof person)// "object"

person.name;
person.name[0];
person.age;


person.bio();
person.introduceSelf();

//Dot notation vs bracket notation:
console.log(`Using bracket notaion: Hello ${person["name"]["first"]}`);

//create new members (using bracket notation allow dynamism, i mean, create properties according to input):
person['height'] = 1.75;

console.log(`The ${ person["name"]["first"]  }'s height is ${ person.height } `);


//constructors with "new":
//create a new object
//bind the new object to "this"
//run the constructor code
//return the new object
function Person(name){
	this.name =  name;
	this.introduceSelf = function(){
		console.log(`Hi! I'm ${ this.name }. `);
	}
}


//function Person vs class Person:
const test1 = new Test1();
function Test1(){
	console.log("A Test1 has been created!");
};

// const test2 = new Test2(); // ReferenceError
class Test2{
	constructor(){
		console.log("A Test2 has been created!");
	}
}

const jhon = new Person("Jhon");
jhon.introduceSelf();