'use strict';

//imperative way:
let input = [1, 2, 3, 4, 5, 6];
let result = [];

let doubleMinusOne = x => (x * 2) - 1;

for(let i = 0; i < input.length; i++){
	result[i] = doubleMinusOne(input[i]);
}

console.log(result);


/**
 * 
 * Whithout specify the How (declarative)...
 * 
 * */
result = input.map(value => (value * 2) - 1);

console.log(result);