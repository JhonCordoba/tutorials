console.log("from service worker");

self.addEventListener("push", (event: any) => {
	const data = event.data.json();
	console.log(data);
	console.log("Notificación recibida");

	// Let's check whether notification permissions have already been granted
	if (Notification.permission === "denied") {
		Notification.requestPermission().then(function (permission) {
			// If the user accepts, let's create a notification
			if (permission === "granted") {
				//@ts-ignore
				self.registration.showNotification(data.title, {
					body: data.body,
					icon: data.icon,
				});
			}
		});
	} else {
		//@ts-ignore
		self.registration.showNotification(data.title, {
			body: data.body,
			icon: data.icon,
		});
	}
});
