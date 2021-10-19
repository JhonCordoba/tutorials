import {
  Controller,
  Param,
  Get,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Task } from '../entities/task.entity';

import { TasksService } from './../services/tasks.service';

@Controller('tasks')
export class TasksController {
  private taskService: TasksService;

  constructor(taskService: TasksService) {
    this.taskService = taskService;
  }

  @Get()
  getAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): any {
    return this.taskService.findOne(id);
  }

  @Post()
  create(@Body() body: any): any {
    return this.taskService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any): any {
    return this.taskService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number): any {
    return this.taskService.delete(id);
  }
}
