const PUBLIC_VAPID_KEY =
	"BGY7pD6kC5Nag-QDYRggWTu9nDQSG_APUSCwmaTPtpkTS32O6ueDg9aMAF1fLJaMOwfK_u05fBjyxI3rtx8peiA";

const subscribeButton: HTMLButtonElement = document.getElementById(
	"subscribeButton"
) as HTMLButtonElement;

const sendNotificationButton: HTMLButtonElement = document.getElementById(
	"sendNotificationButton"
) as HTMLButtonElement;

const registrationTokenInput: HTMLInputElement = document.getElementById(
	"FCMregistrationToken"
) as HTMLInputElement;

subscribeButton.addEventListener("click", async (event) => {
	event.preventDefault();
	const userInfo = {
		userName: "",
		notificationChannel: "",
	};

	//el SDK de
	//FCM se encarga de hacer todo esto que está comentado cuando inicia la app
	//service worker
	// const serviceWorkerRegistration = await navigator.serviceWorker.register(
	// 	"./serviceworker.js",
	// 	{} //scope by default is the directory where is the service worker
	// );
	// console.log("New service worker registred");

	//primero verificamos si estaba subscrito, si es así, eliminamos la subscripción primero:
	// serviceWorkerRegistration.pushManager.getSubscription().then(async (pushSubscription) => {
	// 	if (pushSubscription) {
	// 		//check if user was subscribed with a different key
	// 		const json = pushSubscription.toJSON();
	// 		const public_key = json?.keys?.p256dh;
	// 		console.log("posible old public key: ", public_key);
	// 		if (public_key != PUBLIC_VAPID_KEY) {
	// 			await pushSubscription.unsubscribe();
	// 			alert(
	// 				"primero te desubscribiste, vuelve a subscribirte (presiona el botón subscribirme) porque cambió la clave pública"
	// 			);
	// 		}
	// 	}
	// });

	//esta subscription es la que enviamos al server para que se pueda comunicar
	//con el cliente
	// const subscriptionObject: PushSubscription =
	// 	await serviceWorkerRegistration.pushManager.subscribe({
	// 		userVisibleOnly: true,
	// 		applicationServerKey: PUBLIC_VAPID_KEY,
	// 	});

	userInfo.userName = (<HTMLInputElement>document.getElementById("userName")).value;
	userInfo.notificationChannel = (<HTMLSelectElement>(
		document.getElementById("notificationChannel")
	)).value;

	//sendSubscription(subscriptionObject, userInfo);
	sendSubscription(registrationTokenInput.value, userInfo);
});

const sendSubscription = async (
	//subscriptionObject: PushSubscription,
	FCMregistrationToken: string,
	userInfo: Record<string, string>
) => {
	await fetch("/subscription", {
		method: "POST",
		body: JSON.stringify([FCMregistrationToken, userInfo]),
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log("El cliente ya está subscripto al servidor de notificaciones");
};

sendNotificationButton.addEventListener("click", async (event) => {
	console.log("enviando notificación");
	await fetch("/send-notification", {
		method: "POST",
		body: JSON.stringify({
			notificationTitle: (<HTMLInputElement>document.getElementById("notificationTitle"))
				.value,
			notificationBody: (<HTMLInputElement>document.getElementById("notificationBody")).value,
			icon: (<HTMLInputElement>document.getElementById("notificationIconUrl")).value,
			sendTo: (<HTMLSelectElement>document.getElementById("usersListSelect")).value,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log("Listo, se envió la notificación");
});

fetch("users", {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
}).then(async (responsePromise) => {
	const response = await responsePromise.json();

	const selector: HTMLSelectElement = document.getElementById(
		"usersListSelect"
	) as HTMLSelectElement;

	response.forEach((user: any) => {
		const newOption = document.createElement("option");
		newOption.text = user.userName;
		newOption.value = user.userName;
		selector.add(newOption);
	});
});
