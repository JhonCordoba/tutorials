"use strict";
const PUBLIC_VAPID_KEY = "BAUPCWPGMhzz-3zmdVJYQpOMmlse21ZO7EqGtlJq0KDP5PKk5wMkz2VHPfRMkEVubK-Nux6-ZHR2AuqHzjcbY2Y";
const subscription = async () => {
    const serviceWorkerRegistration = await navigator.serviceWorker.register("./serviceworker.js", {
        scope: "/",
    });
    console.log("New service worker registred");
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
//# sourceMappingURL=main.js.map