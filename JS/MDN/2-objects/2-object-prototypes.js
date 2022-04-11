//literal object
const myObject = {
	city: "Cali",
	greet(){
		console.log(`Greeting from ${this.city}`);
	}
}

//myObject.greet();


//let's watch its prototype; but...
//console.log(myObject);

/**
 * there is no agreed-upon standard for how an inspector (debugger, console, etc...)
 * should display things, thus different environments choose slightly different implementations
 * 
 * console.log() in node use util.inspect(), which uses Object.keys() on objects, and it returns
 * enumerable properties only. And Object.prototype contains non-enumerable properties, that is
 * why it returns empty node
 *
 * */
//don't matter if i use the __proto__ or getPrototypeOf() method, console.log show us {} in node
//console.log(myObject.__proto__);

//but if we define a property in Object.prototype with enumerable: true
// Object.defineProperty(Object.prototype, 'myExampleProperty', {
// 	value: 20,
// 	enumerable: true
// });
// console.log(Object.prototype);

//a solution:
// console.log( Object.getOwnPropertyNames(Object.prototype) );

//console.log(myObject.__proto__.toString());


//the prototype of an object is not always Object.prototype:
const myDate = new Date();
let object = myDate;

// do{
// 	object = Object.getPrototypeOf(object);
// 	console.log( Object.getOwnPropertyNames( object ) );
// }while(object);
// Date.prototype
// Object {...}
// null

//shadowing properties:
//console.log(myDate.getYear());

myDate.getYear = function(){
	console.log("Hey, this is your new getYear method!");
}

//console.log( myDate.getYear() );


//setting a prototype

//1) Using Object.create:
const personProtoype = {
	greet(){
		console.log("Hello");
	}
}

const carl = Object.create(personProtoype);
//carl.greet();

//2) Using the Contructor/Prototype pattern
const personProtoype2 = {
	greet(){
		console.log("Hello my name is " + this.name);
	}
}

function Person(name){
	this.name = name;
}

//all functions in JS has a prototype property, this is the prototype that
//JS use as prototype for objects that are created when we use this function
//like a constructor, using the "new" reserved word:
Person.prototype = personProtoype2;


const jhon = new Person("Jhon");
//jhon.greet();

console.log( Object.getPrototypeOf(jhon).constructor );


//But now, like we use a literal object (personProtoype2), the constructor
//of the prototype of Person is the Object's constructor,
//so, we have to change this:

//Sets the prototype's constructor property to the function used to create Person objects.
Person.prototype.constructor = Person;


console.log( Object.getPrototypeOf(jhon).constructor );


//console.log( Object.getPrototypeOf(jhon) );


//Own properties
console.log(Object.hasOwn(jhon, "name"));
console.log(Object.hasOwn(jhon, "greet"));
