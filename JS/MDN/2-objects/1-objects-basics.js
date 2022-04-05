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

//create new members:
person['height'] = 1.75;

console.log(`The ${ person["name"]["first"]  }'s height is ${ person.height } `);


//constructors
function Person(name){
	this.name =  name;
	this.introduceSelf = function(){
		console.log(`Hi! I'm ${ this.name }. `);
	}
}

const jhon = new Person("Jhon");
jhon.introduceSelf();