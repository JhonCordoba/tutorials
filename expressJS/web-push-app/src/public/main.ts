const PUBLIC_VAPID_KEY =
	"BAUPCWPGMhzz-3zmdVJYQpOMmlse21ZO7EqGtlJq0KDP5PKk5wMkz2VHPfRMkEVubK-Nux6-ZHR2AuqHzjcbY2Y";

const subscription = async () => {
	//service worker
	const serviceWorkerRegistration = await navigator.serviceWorker.register("./serviceworker.js", {
		scope: "/",
	});
	console.log("New service worker registred");

	//esta subscription es la que enviamos al server para que se pueda comunicar
	//con el cliente
	const subscription = await serviceWorkerRegistration.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: PUBLIC_VAPID_KEY,
	});

	await fetch("subscription", {
		method: "POST",
		body: JSON.stringify(subscription),
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log("El cliente ya está subscripto al servidor de notificaciones");
};

subscription();
