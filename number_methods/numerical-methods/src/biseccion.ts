import { rl } from "./helpers/rl";

function f(x: number): number {
	//return Math.pow(x, 2) - 5 * x + 6;
	return Math.exp(x) - 3 * x;
}

export function obtenerParametrosBiseccion(): void {
	rl.question("a ? ", function(a: number) {
		rl.question("b ? ", function(b: number) {
			rl.question("nmax? ", function(nmax: number) {
				rl.question("error tolerado? ", function(e: number) {
					biseccion(f, +a, +b, +nmax, +e);
					rl.close();
				});
			});
		});
	});
}

function biseccion(
	f: (x: number) => number,
	a: number,
	b: number,
	nmax: number,
	errorTolerado: number
): void {
	let n: number = 0;
	let puntoMedio: number = 0;
	let fdePuntoMedio: number = 0;
	let fa: number = f(a);
	let fb: number = f(b);
	console.log(`fa: ${fa} y fb: ${fb}`);

	if (!(fa * fb < 0)) {
		console.log(a, b, fa, fb);
		console.log("la función tiene el mismo signo en a y en b");
		return;
	}

	let error: number = b - a;

	for (n; n <= nmax; n++) {
		error = error / 2;
		puntoMedio = (a + b) / 2;
		fdePuntoMedio = f(puntoMedio);
		console.log(
			n,
			`Solución: ${puntoMedio}`,
			`fDePuntoMedio: ${fdePuntoMedio}`,
			`a: ${a}`,
			`b: ${b}`,
			`error: ${error}`
		);

		if (Math.abs(error) < errorTolerado) {
			console.log("Converge");
			return;
		}
		if (fa * puntoMedio < 0) {
			b = puntoMedio;
			fb = fdePuntoMedio;
		} else {
			a = puntoMedio;
			fa = fdePuntoMedio;
		}
	}
}
