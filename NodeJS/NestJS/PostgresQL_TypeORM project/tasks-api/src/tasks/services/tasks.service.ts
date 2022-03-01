import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private tasksRepo: Repository<Task>) {}

  public findAll(): Promise<Task[]> {
    return this.tasksRepo.find();
  }

  public findOne(id: number) {
    return this.tasksRepo.findOne(id);
  }

  public create(body: any): Promise<Task[]> {
    const newTask = this.tasksRepo.create(body);
    return this.tasksRepo.save(newTask);
  }

  public async update(id: number, body: any) {
    const task = await this.tasksRepo.findOne(id);
    this.tasksRepo.merge(task, body);
    return this.tasksRepo.save(task);
  }

  public async delete(id: number) {
    await this.tasksRepo.delete(id);
    return true;
  }
}
