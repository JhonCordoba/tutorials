const express = require('express');
const app = express();


//the order is important: app.use(myFirstMiddleware);
//first the middlewares: app.use(myFirstMiddleware);

//then the routes: app.get("/", (req, res) => res.send("Welcome"));


const myFirstMiddleware = (req, res, next) => {
	console.log("first. In the middle of the router and the handler");
	next(); //if this miss, the server doesn't continue with the process
}

const mySecondMiddleware = (req, res, next) => {
	console.log("Second");
	next(); //if this miss, the server doesn't continue with the process
}

//the order is important
app.use(myFirstMiddleware);
app.use(mySecondMiddleware);


app.get("/", (req, res) => res.send("Welcome"));


app.listen(5000, () => console.log("listening on port 5000"));
