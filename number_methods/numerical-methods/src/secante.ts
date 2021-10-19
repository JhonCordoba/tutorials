import { Expression } from "nerdamer";
import { rl } from "./helpers/rl";
var nerdamer = require("nerdamer");

export function obtenerParametrosSecante(): void {
	rl.question("fString ? ", function(fString: string) {
		rl.question("a? ", function(a: number) {
			rl.question("b? ", function(b: number) {
				rl.question("nmax? ", function(nmax: number) {
					rl.question("e? ", function(maxError: number) {
						let f: (x: number) => number = nerdamer(
							fString
						).buildFunction();

						secante(f, +a, +b, +nmax, +maxError);
						rl.close();
					});
				});
			});
		});
	});
}

function secante(
	f: (n: number) => number,
	a: number,
	b: number,
	nmax: number,
	maxError: number
): void {
	let fa: number = f(a);
	let fb: number = f(b);
	let auxIntercambio,
		d: number = 0;

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

	for (let n: number = 2; n < nmax; n++) {
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

		console.log(`n: ${n} <> a: ${a} <> fa: ${fa}`);
	}
}
