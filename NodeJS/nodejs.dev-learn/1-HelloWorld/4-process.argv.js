#!/usr/local/bin/node

//const args = process.argv.slice(2)

function myFunction(){
	let sum = 0;

	//node path: process.argv[0]
	//JS file path: process.argv[1]

	console.log(process.argv[0], "\n", process.argv[1]);


	for(let i = 2; i < process.argv.length; i++){


		sum += parseFloat( process.argv[i] );
	}

	console.log(`la suma es: ${sum}`);

	console.trace();

}

myFunction();

