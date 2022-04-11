class Person {
	name;
	#age;
	_hobby; //protected (only getter)

	constructor(name, age = 0){
		this.name = name;
		this.#age = age;
		this.gender;
		this._hobby = "music";
	}

	introduceSelf(){
		console.log(`hi !I'm ${this.name}`);
	}

	get hobby(){
		return this._hobby;
	}

	#somePrivateMethod(){
		console.log("hey man, i am private #");
	}
}



const jhon = new Person("jhon");

// jhon.introduceSelf();

//console.log(jhon.#age); //SyntaxError
//console.log(jhon.#somePrivateMethod); //SyntaxError


jhon.hobby = "play soccer";
console.log(jhon.hobby);


//JS create a default constructor for you, so constructor is optional:
class Animal{
	sleep(){
		console.log("zzzzzz");
	}
}

const dog = new Animal();
dog.sleep();


//Inheritance:
class Programmer extends Person{ 
	#languages;

	constructor(name, languages){
		//set parent's properties
		super(name);

		this.#languages = languages;
	}

	//overridden:
	introduceSelf(){
		console.log(`Hello World! My name is ${this.name} and i am a programmer!`)
	}
}

const aProgrammer = new Programmer("Jhon", ["Javascript/Typescript", "PHP", "Java", "C/C++"]);
aProgrammer.introduceSelf();


//it is harder encapsulation with constructor/prototype pattern:
//private require closures:

function MyConstructor(privateAttribute){
	this.privateAttribute = privateAttribute;
	return {
		getPrivateAttribute(){
			return privateAttribute;
		},

		setPrivateAttribute(newValue){
			privateAttribute = newValue;
		}
	}
}

const aConstructor = new MyConstructor(300);
console.log(aConstructor.privateAttribute);
console.log(aConstructor.getPrivateAttribute());
aConstructor.setPrivateAttribute(600);
console.log(aConstructor.getPrivateAttribute());

