const http = require("http");

const setting = {
	HOSTNAME: "127.0.0.1",
	PORT: 3000
}

const server = http.createServer( (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
} );

server.listen(setting.PORT, setting.HOSTNAME, () => {
	console.log(`Server running at http//${setting.HOSTNAME}:${setting.PORT}/`);
})