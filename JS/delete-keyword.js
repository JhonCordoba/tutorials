'use strict'

const person = {
	name: "Jhon",
	height: 100
}
console.log(person.height);
delete person.height;
console.log(person.height);

// 'use strict' throw an error: if not is use strict
// return false (always use strict)
// delete person;