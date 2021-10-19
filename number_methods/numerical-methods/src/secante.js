"use strict";
exports.__esModule = true;
exports.obtenerParametrosSecante = void 0;
var rl_1 = require("./helpers/rl");
var nerdamer = require("nerdamer");
function obtenerParametrosSecante() {
    rl_1.rl.question("fString ? ", function (fString) {
        rl_1.rl.question("a? ", function (a) {
            rl_1.rl.question("b? ", function (b) {
                rl_1.rl.question("nmax? ", function (nmax) {
                    rl_1.rl.question("e? ", function (maxError) {
                        var f = nerdamer(fString).buildFunction();
                        secante(f, +a, +b, +nmax, +maxError);
                        rl_1.rl.close();
                    });
                });
            });
        });
    });
}
exports.obtenerParametrosSecante = obtenerParametrosSecante;
function secante(f, a, b, nmax, maxError) {
    var fa = f(a);
    var fb = f(b);
    var auxIntercambio, d = 0;
    if (fa > fb) {
        auxIntercambio = a;
        a = b;
        b = auxIntercambio;
        auxIntercambio = fa;
        fa = fb;
        fb = auxIntercambio;
    }
    console.log("0", a, fa);
    console.log("1", b, fb);
    for (var n = 2; n < nmax; n++) {
        if (Math.abs(fa) > Math.abs(fb)) {
            auxIntercambio = a;
            a = b;
            b = auxIntercambio;
            auxIntercambio = fa;
            fa = fb;
            fb = auxIntercambio;
        }
        d = (b - a) / (fb - fa);
        b = a;
        fb = fa;
        d = d * fa;
        if (Math.abs(d) < maxError) {
            console.log("converge");
            return;
        }
        a = a - d;
        fa = f(a);
        console.log("n: " + n + " <> a: " + a + " <> fa: " + fa);
    }
}
