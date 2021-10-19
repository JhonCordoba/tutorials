"use strict";
exports.__esModule = true;
var rl_1 = require("./helpers/rl");
var biseccion_1 = require("./biseccion");
var newton_1 = require("./newton");
var secante_1 = require("./secante");
rl_1.rl.question("\n    biseccion ? 1\n    Newton ? 2\n    Secante ? 3\n\n", function (key) {
    switch (key) {
        case "1":
            biseccion_1.obtenerParametrosBiseccion();
            break;
        case "2":
            newton_1.obtenerParametrosNewton();
            break;
        case "3":
            secante_1.obtenerParametrosSecante();
            break;
        default:
            break;
    }
});
