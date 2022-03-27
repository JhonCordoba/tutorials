class Person{

	#age;

	constructor(firstName, lastName, age){
		this.firstName = firstName;
		this.lastName = lastName;
		this.#age = age;
	}

	get name(){
		return this.firstName + " " + this.lastName;
	}

	get age(){
		return this.#age;
	}

	set age(age){
		this.#age = age > 0 && age < 150 ? age : 0;
	}
}

const p1 = new Person('Francia ', ' Márquez');
console.log(p1.name);

p1.age = 40;


console.log(p1.age);

