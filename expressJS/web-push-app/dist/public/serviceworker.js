"use strict";
console.log("from service worker");
self.addEventListener("push", (event) => {
    const data = event.data.json();
    console.log(data);
    console.log("Notificación recibida");
    if (Notification.permission === "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                self.registration.showNotification(data.title, {
                    body: data.body,
                    icon: data.icon,
                });
            }
        });
    }
    else {
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: data.icon,
        });
    }
});
//# sourceMappingURL=serviceworker.js.map