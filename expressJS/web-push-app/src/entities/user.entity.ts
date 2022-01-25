import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "users" })
export default class User {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@Column({ name: "user_name", type: String })
	userName!: string;

	@Column({ name: "notification_channel", type: String })
	notificationChannel!: string;

	@Column({ name: "fcm_registration_token", type: String })
	FCMregistrationToken!: string;

	@Column({ name: "subscription_expiration_time", type: Date, nullable: true })
	subscriptionExpirationTime!: Date;
}

// subscription object:
// {
//     endpoint: 'https://fcm.googleapis.com/fcm/send/cWzdhKt4GJU:APA91bEWWXjpyoFsZ3CxI5verrdMhaLgi11ZCfJi5NYNb9wWSfctBUgBbT1ALdOnBiko-IVI0Avv0GvhAZpHNmRCgnaD5sUNe4aJx-Sxj1r5l7v7PeHICqD8Wu_vhsa_g2GxHOG0f6zU',
//     expirationTime: null,
//     keys: {
//       p256dh: 'BMsUzZwh3qO3FXprqEFlVRFq1is7drrxQmBGHuUzyhxrLAP5T4I8Vrutn3AJEaTHp5edHJQzqChHC2RhKftj8is',
//       auth: 'Qb7rlF07-51T8bBLziH86A'
//     }
// }
