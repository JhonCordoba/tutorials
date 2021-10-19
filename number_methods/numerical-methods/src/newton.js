"use strict";
exports.__esModule = true;
exports.obtenerParametrosNewton = void 0;
var rl_1 = require("./helpers/rl");
var nerdamer = require("nerdamer");
require("nerdamer/Calculus");
function obtenerParametrosNewton() {
    rl_1.rl.question("fString ? ", function (fString) {
        rl_1.rl.question("x? ", function (x) {
            rl_1.rl.question("nmax? ", function (nmax) {
                rl_1.rl.question("maxError? ", function (e) {
                    var f = nerdamer(fString).buildFunction();
                    var df = nerdamer
                        .diff(nerdamer(fString), "x")
                        .buildFunction();
                    newton(f, df, +x, +nmax, +e);
                    rl_1.rl.close();
                });
            });
        });
    });
}
exports.obtenerParametrosNewton = obtenerParametrosNewton;
function newton(f, df, x, nmax, maxError) {
    var fx = f(x);
    var fp, d = 0;
    console.log(0, x, fx);
    for (var n = 1; n <= nmax; n++) {
        fp = df(x);
        d = fx / fp;
        x = x - d;
        fx = f(x);
        console.log("n: " + n + " <> soluci\u00F3n (x): " + x + " <> fx: " + fx + " <> d: " + d);
        if (Math.abs(d) < maxError) {
            console.log("convergencia");
            return;
        }
    }
}
