"use strict";
console.log("from my new service worker");
self.addEventListener("push", (event) => {
	const data = event.data.json();
	console.log(data);
	console.log(data.notification);
	console.log("Notificación recibida");
	if (Notification.permission === "denied") {
		Notification.requestPermission().then(function (permission) {
			if (permission === "granted") {
				self.registration.showNotification(data.notification.title, {
					body: data.notification.body,
					icon: data.notification.icon,
				});
			}
		});
	} else {
		self.registration.showNotification(data.notification.title, {
			body: data.notification.body,
			icon: data.notification.icon,
		});
	}
});
//# sourceMappingURL=serviceworker.js.map
