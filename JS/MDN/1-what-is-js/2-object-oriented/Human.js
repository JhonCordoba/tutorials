class Human{

	#firstName;
	#lastName;

	constructor(firstName, lastName){
		this.#firstName = firstName;
		this.#lastName = lastName;
	}

	//method
	getFullName(){
		return this.#firstName + " " + this.#lastName;
	}

	//getter
	// get fullName(){
	// 	return this.#firstName + " " + this.#lastName;
	// }

	// set firstName(firstName){
	// 	this.#firstName = firstName;
	// }

}

const myHuman = new Human("Jhon", "Cordoba");
myHuman.firstName = "Jhon Alejandro";

console.log(myHuman.getFullName());
console.log(myHuman.fullName);