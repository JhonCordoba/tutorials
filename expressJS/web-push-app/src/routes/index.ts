import { Router } from "express";
import webpush from "../webpush";

import admin from "firebase-admin";

import User from "../entities/user.entity";
import UserRepository from "../entities/user.repository";

const router = Router();

router.post("/send-notification", async (req, res) => {
	const payload = JSON.stringify({
		title: req.body.notificationTitle,
		body: req.body.notificationBody,
		icon:
			req.body.notificationIconUrl ||
			"https://img1.freepng.es/20180414/vle/kisspng-arch-linux-installation-btrfs-computer-software-archery-5ad1b76b915298.4679673115236934195953.jpg",
	});

	const userRepository: UserRepository = new UserRepository();
	let usersToSendNotification: User[] = [];
	if (req.body.sendTo !== "everybody") {
		usersToSendNotification = await userRepository.find(req.body.sendTo);
	} else {
		usersToSendNotification = await userRepository.findAll();
	}

	//Funciona bien usando la librería web-push; pero es mejor utilizar
	//el SDK de Firebase...
	// let pushSubscription: any = {};
	// usersToSendNotification.forEach(async (userToSendNotificatin) => {
	// 	pushSubscription = {
	// 		endpoint: userToSendNotificatin.endpointToSendNotification,
	// 		keys: {
	// 			p256dh: userToSendNotificatin.p256dhKey,
	// 			auth: userToSendNotificatin.authKey,
	// 		},
	// 		expirationTime: userToSendNotificatin.subscriptionExpirationTime,
	// 	};

	// 	try {
	// 		await webpush.sendNotification(pushSubscription, payload);
	// 	} catch (error) {
	// 	}
	// });

	//Usando el SDK de Firebase para NodeJS:
	const registrationTokens: Array<any> = [];
	usersToSendNotification.forEach((userToSendNotificatin: any) => {
		registrationTokens.push(userToSendNotificatin.FCMregistrationToken);
	});

	const message = {
		notification: {
			title: req.body.notificationTitle,
			body: req.body.notificationBody,
		},
		tokens: registrationTokens,
	};

	admin
		.messaging()
		//@ts-ignore
		.sendMulticast(message)
		.then((response: any) => {
			// Response is a message ID string.
			console.log("Successfully sent message (message id):", response);
		})
		.catch((error: any) => {
			console.log("Error sending message:", error);
		});

	res.status(200).json();
});

router.post("/subscription", async (req, res) => {
	const userRepository: UserRepository = new UserRepository();

	console.log(req.body);
	//todo está comentado, era la implementación manual de lo que hace el SDK de firebase,
	//ahora solo es necesario guardar el token registration.
	//const pushSubscription = req.body[0];
	const FCMregistrationToken = req.body[0];
	const userInfo: User = req.body[1];
	// userInfo.authKey = pushSubscription.keys.auth;
	// userInfo.p256dhKey = pushSubscription.keys.p256dh;
	// userInfo.FCMregistrationToken = pushSubscription.FCMregistrationToken;
	// userInfo.subscriptionExpirationTime = pushSubscription.expirationTime;
	userInfo.FCMregistrationToken = FCMregistrationToken;
	await userRepository.save(userInfo);

	res.status(200).json();

	// const payload = JSON.stringify({
	// 	title: "Successful registration-",
	// 	body: "Welcome, this is a demo for the Xamu Notification System. Now you are subscribed. You can send custom notifications to the list of users",
	// 	icon: "https://img1.freepng.es/20180414/vle/kisspng-arch-linux-installation-btrfs-computer-software-archery-5ad1b76b915298.4679673115236934195953.jpg",
	// });
	// try {
	// 	await webpush.sendNotification(pushSubscription, payload);
	// } catch (error) {
	// 	console.log(error);
	// }
	//test: curl -X  POST http://localhost/subscription -d '{"m1": 1}' -H "Content-Type: application/json
});

router.get("/users", async (req, res) => {
	const userRepository: UserRepository = new UserRepository();
	res.status(200).json(await userRepository.findAll());
});

export default router;
