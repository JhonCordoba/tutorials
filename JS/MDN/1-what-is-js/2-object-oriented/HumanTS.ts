class Human{

	private firstName;
	private lastName;

	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public getFullName(){
		return this.firstName + " " + this.lastName;
	}




}

const myHuman = new Human("Jhon", "Cordoba");


console.log(myHuman.getFullName());