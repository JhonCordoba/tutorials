import { Expression } from "nerdamer";
import { rl } from "./helpers/rl";
var nerdamer = require("nerdamer");
require("nerdamer/Calculus");

export function obtenerParametrosNewton(): void {
	rl.question("fString ? ", function(fString: string) {
		rl.question("x? ", function(x: number) {
			rl.question("nmax? ", function(nmax: number) {
				rl.question("maxError? ", function(e: number) {
					let f: (x: number) => number = nerdamer(
						fString
					).buildFunction();
					let df: (x: number) => number = nerdamer
						.diff(nerdamer(fString), "x")
						.buildFunction();
					newton(f, df, +x, +nmax, +e);
					rl.close();
				});
			});
		});
	});
}

function newton(
	f: (n: number) => number,
	df: (n: number) => number,
	x: number,
	nmax: number,
	maxError: number
): void {
	let fx: number = f(x);
	let fp,
		d: number = 0;

	console.log(0, x, fx);

	for (let n: number = 1; n <= nmax; n++) {
		fp = df(x);
		d = fx / fp;
		x = x - d;
		fx = f(x);
		console.log(`n: ${n} <> solución (x): ${x} <> fx: ${fx} <> d: ${d}`);

		if (Math.abs(d) < maxError) {
			console.log("convergencia");
			return;
		}
	}
}
