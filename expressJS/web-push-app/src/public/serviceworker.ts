console.log("from service worker");

self.addEventListener("push", (event: any) => {
	const data = event.data.json();
	console.log(data);
	console.log("Notificación recibida");
	//@ts-ignore
	self.registration.showNotification(data.title, {
		body: data.body,
		icon: "https://img1.freepng.es/20180414/vle/kisspng-arch-linux-installation-btrfs-computer-software-archery-5ad1b76b915298.4679673115236934195953.jpg",
	});
});
