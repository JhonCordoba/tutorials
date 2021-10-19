import webpush from "web-push";

webpush.setVapidDetails(
	"mailto:jhon.figueroa@correouinivalle.edu.co",
	process.env.PUBLIC_VAPID_KEY as string,
	process.env.PRIVATE_VAPID_KEY as string
);

console.log(
	"PUBLIC_KEY: ",
	process.env.PUBLIC_VAPID_KEY,
	"PRIVATE_JEY: ",
	process.env.PRIVATE_VAPID_KEY
);

export default webpush;
