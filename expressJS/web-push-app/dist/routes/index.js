"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const firebase_admin_1 = (0, tslib_1.__importDefault)(require("firebase-admin"));
const user_repository_1 = (0, tslib_1.__importDefault)(require("../entities/user.repository"));
const router = (0, express_1.Router)();
router.post("/send-notification", (req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const payload = JSON.stringify({
        title: req.body.notificationTitle,
        body: req.body.notificationBody,
        icon: req.body.notificationIconUrl ||
            "https://img1.freepng.es/20180414/vle/kisspng-arch-linux-installation-btrfs-computer-software-archery-5ad1b76b915298.4679673115236934195953.jpg",
    });
    const userRepository = new user_repository_1.default();
    let usersToSendNotification = [];
    if (req.body.sendTo !== "everybody") {
        usersToSendNotification = yield userRepository.find(req.body.sendTo);
    }
    else {
        usersToSendNotification = yield userRepository.findAll();
    }
    const registrationTokens = [];
    usersToSendNotification.forEach((userToSendNotificatin) => {
        registrationTokens.push(userToSendNotificatin.FCMregistrationToken);
    });
    const message = {
        notification: {
            title: req.body.notificationTitle,
            body: req.body.notificationBody,
        },
        tokens: registrationTokens,
    };
    firebase_admin_1.default
        .messaging()
        .sendMulticast(message)
        .then((response) => {
        console.log("Successfully sent message (message id):", response);
    })
        .catch((error) => {
        console.log("Error sending message:", error);
    });
    res.status(200).json();
}));
router.post("/subscription", (req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const userRepository = new user_repository_1.default();
    console.log(req.body);
    const FCMregistrationToken = req.body[0];
    const userInfo = req.body[1];
    userInfo.FCMregistrationToken = FCMregistrationToken;
    yield userRepository.save(userInfo);
    res.status(200).json();
}));
router.get("/users", (req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const userRepository = new user_repository_1.default();
    res.status(200).json(yield userRepository.findAll());
}));
exports.default = router;
//# sourceMappingURL=index.js.map