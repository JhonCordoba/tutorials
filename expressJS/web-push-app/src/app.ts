//First we need to load our envirement variables.
import dotenv from "dotenv";
dotenv.config();

import admin from "firebase-admin";
import serviceAccount from "./service-account-key.json";
//initialize firebase admin, for send notifications:
//@ts-ignore
admin.initializeApp({
	//@ts-ignore
	credential: admin.credential.cert(serviceAccount),
});

//typeorm settings:
import "reflect-metadata";
import { createConnection } from "typeorm";
createConnection();

import express from "express";
import morgan from "morgan";
import path from "path";
import routes from "./routes/index";

// import fs from "fs";
// import https from "https";

const PORT_LISTEN_SERVER = process.env.PORT || 5000;
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(routes);

//Static Content
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../node_modules/firebase/messaging")));

// https
// 	.createServer(
// 		{
// 			key: fs.readFileSync(path.join(__dirname, "my_cert.key")),
// 			cert: fs.readFileSync(path.join(__dirname, "my_cert.crt")),
// 		},
// 		app
// 	)
// 	.listen(PORT_LISTEN_SERVER, function () {
// 		console.log("My HTTPS server listening on port " + PORT_LISTEN_SERVER + "...");
// 	});

app.listen(PORT_LISTEN_SERVER);
console.log("My HTTPS server listening on port " + PORT_LISTEN_SERVER + "...");
