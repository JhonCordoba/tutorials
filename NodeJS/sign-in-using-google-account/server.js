const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
	res.render('../login')
})

app.listen(8088, () => {
	console.log('server running on port 8088');
})
