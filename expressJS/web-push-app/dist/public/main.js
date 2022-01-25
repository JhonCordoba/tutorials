"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const PUBLIC_VAPID_KEY = "BGY7pD6kC5Nag-QDYRggWTu9nDQSG_APUSCwmaTPtpkTS32O6ueDg9aMAF1fLJaMOwfK_u05fBjyxI3rtx8peiA";
const subscribeButton = document.getElementById("subscribeButton");
const sendNotificationButton = document.getElementById("sendNotificationButton");
const registrationTokenInput = document.getElementById("FCMregistrationToken");
subscribeButton.addEventListener("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const userInfo = {
        userName: "",
        notificationChannel: "",
    };
    userInfo.userName = document.getElementById("userName").value;
    userInfo.notificationChannel = (document.getElementById("notificationChannel")).value;
    sendSubscription(registrationTokenInput.value, userInfo);
}));
const sendSubscription = (FCMregistrationToken, userInfo) => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch("/subscription", {
        method: "POST",
        body: JSON.stringify([FCMregistrationToken, userInfo]),
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log("El cliente ya está subscripto al servidor de notificaciones");
});
sendNotificationButton.addEventListener("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("enviando notificación");
    yield fetch("/send-notification", {
        method: "POST",
        body: JSON.stringify({
            notificationTitle: document.getElementById("notificationTitle")
                .value,
            notificationBody: document.getElementById("notificationBody").value,
            icon: document.getElementById("notificationIconUrl").value,
            sendTo: document.getElementById("usersListSelect").value,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log("Listo, se envió la notificación");
}));
fetch("users", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
}).then((responsePromise) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield responsePromise.json();
    const selector = document.getElementById("usersListSelect");
    response.forEach((user) => {
        const newOption = document.createElement("option");
        newOption.text = user.userName;
        newOption.value = user.userName;
        selector.add(newOption);
    });
}));
//# sourceMappingURL=main.js.map