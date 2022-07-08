//First JS add an anonymous global function:
//Object.<anonymous>


const throwAnException = () => {
	//Fifth: we finish the execution
	//throwing an error and we can check
	//the stack trace.
	throw Error("This is my error");
}

const sayHello = () => console.log("Hello!");

function addFunctionsToCallStack(){
	//third: we add console.log to the stack
	//but console.log return inmediately
	console.log("My first function added");
	

	//fourth: we add throwAnException to the call stack
	throwAnException();


	sayHello();
}

// Second we call addFunctionsToCallStack
//so addFunctionsToCallStack is added to the call stack
addFunctionsToCallStack();

//STACK is a LIFO data structure:
//1-anonymous-global() (Object.<anonymous>)
//2-addFunctionsToCallStack()
//*(exit from stack immediately)-console.log()
//3-throwAnException()