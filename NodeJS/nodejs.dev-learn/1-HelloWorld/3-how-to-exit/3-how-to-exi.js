//it's not a good practice
// process.exit(1);
// process.exitCode = 1;
// process.exit();


//this never is going to end:

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send("Hi!");
} );

const server = app.listen(3000, () => console.log('Server ready!'));

//to finish the last program correctly:
process.on("SIGTERM", () => {
	server.close(() => {
		console.log('Process terminated');
	})
});

//You can send this signal from inside the program, in another function:
process.kill(process.pid, 'SIGTERM');