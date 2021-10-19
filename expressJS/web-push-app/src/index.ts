//First we need to load our envirement variables.
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import path from "path";
import routes from "./routes/index";

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(routes);

//Static Content
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000);
console.log("server was started on port " + 3000);
