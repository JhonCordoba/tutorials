import { Router } from "express";
import webpush from "../webpush";

const router = Router();

let pushSubscription;

router.post("/subscription", async (req, res) => {
	console.log(req.body);
	pushSubscription = req.body;
	res.status(200).json();

	const payload = JSON.stringify({
		title: "my custon notification",
		body: "Hello world from server throught notification",
	});
	try {
		await webpush.sendNotification(pushSubscription, payload);
	} catch (error) {
		console.log(error);
	}
	//test: curl -X  POST http://localhost:3000/subscription -d '{"m1": 1}' -H "Content-Type: application/json
});

export default router;
