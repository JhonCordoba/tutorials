import User from "./user.entity";
import { getRepository, getConnection, Repository } from "typeorm";

export default class UserRepository {
	public async save(userToSave: User): Promise<User | void> {
		const userRepo: Repository<User> = getRepository(User);
		userToSave = userRepo.create(userToSave);
		return userRepo.save(userToSave).catch((error) => console.log(error));
	}

	public async find(filter: string): Promise<User[]> {
		const userRepo: Repository<User> = getRepository(User);
		return userRepo.find({
			where: [{ userName: filter }, { notificationChannel: filter }],
		});
	}

	public async findAll(): Promise<User[]> {
		const userRepo: Repository<User> = getRepository(User);
		return userRepo.find();
	}
}
