"use strict";
exports.__esModule = true;
exports.obtenerParametrosBiseccion = void 0;
var rl_1 = require("./helpers/rl");
function f(x) {
    //return Math.pow(x, 2) - 5 * x + 6;
    return Math.exp(x) - 3 * x;
}
function obtenerParametrosBiseccion() {
    rl_1.rl.question("a ? ", function (a) {
        rl_1.rl.question("b ? ", function (b) {
            rl_1.rl.question("nmax? ", function (nmax) {
                rl_1.rl.question("error tolerado? ", function (e) {
                    biseccion(f, +a, +b, +nmax, +e);
                    rl_1.rl.close();
                });
            });
        });
    });
}
exports.obtenerParametrosBiseccion = obtenerParametrosBiseccion;
function biseccion(f, a, b, nmax, errorTolerado) {
    var n = 0;
    var puntoMedio = 0;
    var fdePuntoMedio = 0;
    var fa = f(a);
    var fb = f(b);
    console.log("fa: " + fa + " y fb: " + fb);
    if (!(fa * fb < 0)) {
        console.log(a, b, fa, fb);
        console.log("la función tiene el mismo signo en a y en b");
        return;
    }
    var error = b - a;
    for (n; n <= nmax; n++) {
        error = error / 2;
        puntoMedio = (a + b) / 2;
        fdePuntoMedio = f(puntoMedio);
        console.log(n, "Soluci\u00F3n: " + puntoMedio, "fDePuntoMedio: " + fdePuntoMedio, "a: " + a, "b: " + b, "error: " + error);
        if (Math.abs(error) < errorTolerado) {
            console.log("Converge");
            return;
        }
        if (fa * puntoMedio < 0) {
            b = puntoMedio;
            fb = fdePuntoMedio;
        }
        else {
            a = puntoMedio;
            fa = fdePuntoMedio;
        }
    }
}
