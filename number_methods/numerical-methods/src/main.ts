import { rl } from "./helpers/rl";
import { obtenerParametrosBiseccion } from "./biseccion";
import { obtenerParametrosNewton } from "./newton";
import { obtenerParametrosSecante } from "./secante";

rl.question(
	`
    biseccion ? 1
    Newton ? 2
    Secante ? 3

`,
	function(key: string) {
		switch (key) {
			case "1":
				obtenerParametrosBiseccion();
				break;

			case "2":
				obtenerParametrosNewton();
				break;

			case "3":
				obtenerParametrosSecante();
				break;

			default:
				break;
		}
	}
);
